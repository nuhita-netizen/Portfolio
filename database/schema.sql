-- Mandi Procurement System - Database Schema
-- Compatible with MySQL 8.0+

CREATE DATABASE IF NOT EXISTS mandi_procurement_db;
USE mandi_procurement_db;

-- -----------------------------------------------------
-- 1. Procurement Centre (Mandi / Center Master)
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS procurement_centers (
    center_id INT AUTO_INCREMENT PRIMARY KEY,
    center_name VARCHAR(150) NOT NULL,
    address TEXT,
    latitude DECIMAL(10, 8) NULL,
    longitude DECIMAL(11, 8) NULL,
    district VARCHAR(100) NOT NULL,
    mandal VARCHAR(100) NOT NULL,
    max_quantity_quintals DECIMAL(10, 2) DEFAULT NULL COMMENT 'Max storage/procurement capacity per day in quintals',
    max_farmers_per_day INT DEFAULT NULL COMMENT 'Max number of farmers allowed per day',
    operating_hours VARCHAR(100) DEFAULT '09:00 AM - 05:00 PM',
    contact_officer_id INT NULL COMMENT 'FK added via ALTER TABLE to avoid circular dependency',
    status ENUM('active', 'inactive', 'temporarily_closed') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_location (district, mandal),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- 2. Crop Master
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS crops (
    crop_id INT AUTO_INCREMENT PRIMARY KEY,
    crop_name VARCHAR(100) NOT NULL,
    variety VARCHAR(100) NOT NULL,
    msp_per_quintal DECIMAL(10, 2) NOT NULL COMMENT 'Minimum Support Price per Quintal in INR',
    season ENUM('Rabi', 'Kharif', 'Zaid') NOT NULL,
    procurement_start_date DATE NOT NULL,
    procurement_end_date DATE NOT NULL,
    max_moisture_percentage DECIMAL(5, 2) DEFAULT 12.00 COMMENT 'Quality grade threshold for moisture %',
    quality_parameters JSON DEFAULT NULL COMMENT 'Additional quality grade parameters',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_crop_variety (crop_name, variety, season),
    INDEX idx_season (season)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- 3. Officer / Staff Master
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS officers (
    officer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    assigned_center_id INT NULL,
    contact_number VARCHAR(15) NOT NULL,
    email VARCHAR(100) UNIQUE NULL,
    role ENUM('procurement_officer', 'quality_inspector', 'payment_officer') NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_officer_center 
        FOREIGN KEY (assigned_center_id) 
        REFERENCES procurement_centers(center_id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE,
    INDEX idx_role (role),
    INDEX idx_center (assigned_center_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Add FK constraint for contact_officer_id in procurement_centers
ALTER TABLE procurement_centers
    ADD CONSTRAINT fk_center_contact_officer 
    FOREIGN KEY (contact_officer_id) 
    REFERENCES officers(officer_id) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE;

-- -----------------------------------------------------
-- 4. Payment Records
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS payment_records (
    payment_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    token_id BIGINT NOT NULL COMMENT 'Reference ID for procurement token',
    farmer_id BIGINT NOT NULL COMMENT 'Reference ID for farmer',
    quantity_procured DECIMAL(10, 2) NOT NULL COMMENT 'Quantity in Quintals',
    rate_applied DECIMAL(10, 2) NOT NULL COMMENT 'Rate per Quintal in INR',
    gross_amount DECIMAL(12, 2) NOT NULL COMMENT '(quantity_procured * rate_applied)',
    deductions DECIMAL(10, 2) DEFAULT 0.00 COMMENT 'Deductions for quality issues',
    net_amount DECIMAL(12, 2) NOT NULL COMMENT '(gross_amount - deductions)',
    payment_mode ENUM('bank_transfer', 'UPI') NOT NULL,
    payment_status ENUM('pending', 'processed', 'failed') DEFAULT 'pending',
    transaction_id VARCHAR(100) UNIQUE NULL COMMENT 'Bank/Gateway reference ID',
    payment_date DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_farmer (farmer_id),
    INDEX idx_token (token_id),
    INDEX idx_payment_status (payment_status),
    INDEX idx_transaction (transaction_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- 5. Feedback & Complaints
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS feedback_complaints (
    complaint_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    farmer_id BIGINT NOT NULL COMMENT 'Reference ID for farmer',
    token_id BIGINT NULL COMMENT 'Optional reference to procurement token',
    complaint_type ENUM('payment_delay', 'quality_rejection', 'mandi_facility', 'staff_behavior', 'token_issue', 'other') NOT NULL,
    description TEXT NOT NULL,
    status ENUM('open', 'in_progress', 'resolved', 'rejected') DEFAULT 'open',
    resolved_by INT NULL COMMENT 'Officer who resolved the issue',
    resolution_date DATETIME NULL,
    resolution_notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_feedback_resolved_officer 
        FOREIGN KEY (resolved_by) 
        REFERENCES officers(officer_id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE,
    INDEX idx_farmer_complaint (farmer_id),
    INDEX idx_complaint_status (status),
    INDEX idx_complaint_type (complaint_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Seed Data for Mandi Procurement System

USE mandi_procurement_db;

-- 1. Insert Procurement Centers
INSERT INTO procurement_centers (center_name, address, latitude, longitude, district, mandal, max_quantity_quintals, max_farmers_per_day, operating_hours, status)
VALUES 
('Guntur Central Agricultural Market', 'Market Yard Road, Guntur', 16.299740, 80.443970, 'Guntur', 'Guntur Urban', 5000.00, 200, '08:00 AM - 06:00 PM', 'active'),
('Kurnool Cotton Procurement Center', 'NH-44 Bypass, Kurnool', 15.828130, 78.037270, 'Kurnool', 'Kurnool Rural', 3500.00, 150, '09:00 AM - 05:00 PM', 'active'),
('Eluru Paddy Procurement Hub', 'Station Road, Eluru', 16.710700, 81.095200, 'West Godavari', 'Eluru', 4000.00, 180, '08:30 AM - 05:30 PM', 'active');

-- 2. Insert Officers
INSERT INTO officers (name, designation, assigned_center_id, contact_number, email, role, status)
VALUES 
('Ramesh Kumar', 'Senior Procurement Officer', 1, '+919876543210', 'ramesh.k@mandi.gov.in', 'procurement_officer', 'active'),
('Anita Sharma', 'Chief Quality Inspector', 1, '+919876543211', 'anita.s@mandi.gov.in', 'quality_inspector', 'active'),
('Srinivas Rao', 'Accounts & Payment Officer', 1, '+919876543212', 'srinivas.r@mandi.gov.in', 'payment_officer', 'active'),
('Venkatesh Babu', 'Procurement Officer', 2, '+919876543213', 'venkatesh.b@mandi.gov.in', 'procurement_officer', 'active');

-- Link Contact Officer to Procurement Center
UPDATE procurement_centers SET contact_officer_id = 1 WHERE center_id = 1;
UPDATE procurement_centers SET contact_officer_id = 4 WHERE center_id = 2;

-- 3. Insert Crops
INSERT INTO crops (crop_name, variety, msp_per_quintal, season, procurement_start_date, procurement_end_date, max_moisture_percentage, quality_parameters)
VALUES 
('Paddy', 'Common Grade A', 2300.00, 'Kharif', '2026-10-01', '2027-01-31', 17.00, '{"max_foreign_matter_pct": 2.0, "max_damaged_grains_pct": 5.0}'),
('Wheat', 'Sharbati High Grade', 2275.00, 'Rabi', '2026-03-15', '2026-06-30', 12.00, '{"max_foreign_matter_pct": 1.5, "max_shriveled_grains_pct": 4.0}'),
('Cotton', 'Long Staple', 7121.00, 'Kharif', '2026-10-15', '2027-02-28', 8.00, '{"staple_length_mm": 29.5, "trash_pct_max": 4.0}'),
('Maize', 'Yellow Hybrid', 2090.00, 'Kharif', '2026-09-15', '2026-12-31', 14.00, '{"max_foreign_matter_pct": 2.0}');

-- 4. Insert Payment Records
INSERT INTO payment_records (token_id, farmer_id, quantity_procured, rate_applied, gross_amount, deductions, net_amount, payment_mode, payment_status, transaction_id, payment_date)
VALUES 
(1001, 5001, 50.00, 2300.00, 115000.00, 1000.00, 114000.00, 'bank_transfer', 'processed', 'TXN20260828001', '2026-08-28 10:30:00'),
(1002, 5002, 35.00, 7121.00, 249235.00, 0.00, 249235.00, 'UPI', 'processed', 'UPI20260828002', '2026-08-28 11:15:00'),
(1003, 5003, 80.00, 2275.00, 182000.00, 500.00, 181500.00, 'bank_transfer', 'pending', NULL, NULL);

-- 5. Insert Feedback & Complaints
INSERT INTO feedback_complaints (farmer_id, token_id, complaint_type, description, status, resolved_by, resolution_date, resolution_notes)
VALUES 
(5001, 1001, 'payment_delay', 'Payment processed confirmation not received on mobile after 2 days.', 'resolved', 3, '2026-08-28 11:00:00', 'Bank UTR verified and SMS notification re-sent.'),
(5004, NULL, 'mandi_facility', 'Lack of covered waiting shed near gate #2 during afternoon hours.', 'open', NULL, NULL, NULL);

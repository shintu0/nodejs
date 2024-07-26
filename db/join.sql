-- both below are same take all possible data from both tables
-- SELECT * FROM band b JOIN albums a ON a.band_id=b.id;
-- SELECT * FROM band b INNER JOIN albums a ON a.band_id=b.id;

-- take left table as super set and other as subset
-- SELECT * FROM band b LEFT JOIN albums a ON a.band_id=b.id;

-- take right table as super set and other as subset
-- SELECT * FROM band b LEFT JOIN albums a ON a.band_id=b.id;

-- having happens after group by 
-- where happens before

-- comparison happens with what is already selected

SELECT band_id,band.name as "Band Name",COUNT(band_id) as number_of_albums FROM band LEFT JOIN albums ON albums.band_id=band.id GROUP BY band.id HAVING number_of_albums=2;
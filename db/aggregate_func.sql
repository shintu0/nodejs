SELECT COUNT(*) FROM albums;

SELECT AVG(release_year) FROM albums;

-- we can use group by with aggregate functions
SELECT name,COUNT(name) FROM albums GROUP BY name;
SELECT band_id,COUNT(band_id) FROM albums GROUP BY band_id;
SELECT name,AVG(release_year) FROM albums GROUP BY name;

-- with joins
-- SELECT band_id,band.name as "Band Name",COUNT(band_id) as "Number of Albums" FROM albums JOIN band ON albums.band_id=band.id GROUP BY band_id;

-- WE HAVE TO GROUP BASED ON THE TYPE OF JOIN

SELECT band.name as "Band Name",COUNT(band_id) as "Number of Albums" FROM band LEFT JOIN albums ON albums.band_id=band.id GROUP BY band.id;

SELECT band.name as "Band Name",COUNT(band_id) as "Number of Albums" FROM band RIGHT JOIN albums ON albums.band_id=band.id GROUP BY band_id;
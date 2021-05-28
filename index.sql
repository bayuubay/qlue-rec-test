create table assessments (
date dateTime,
username varchar(128),
score float
);

-- 1). showing data from March 1st to April 30th
SELECT DAY (date) AS DAY,
SUM (CASE WHEN SCORE >=0 THEN 1 ELSE 0 END) AS NUM_POS_SCORE,
SUM (CASE WHEN SCORE < THEN 1 ELSE 0 END) AS NUM_NEG_SCORE,
FROM ASSESSMENTS WHERE (date BETWEEN '2011-03-01' AND '2011-04-30')

-- 2). return all the data from jan 1st 2011 to june 30th 2011
SELECT DAY (date) AS DAY,
SUM (CASE WHEN SCORE >=0 THEN 1 ELSE 0 END) AS NUM_POS_SCORE,
FROM ASSESSMENTS WHERE (date BETWEEN '2011-01-01' AND '2011-06-30')

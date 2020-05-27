---
slug: "/post/truncate-your-time-series"
date: "2019-05-04"
title: "Truncate your time series"
---

# Truncate your time series

One day, you have a data. It looks like this.

| Time     | Group |
| -------- | ----- |
| 07:21:54 | A     |
| 08:06:15 | B     |
| 08:21:50 | A     |
| 07:07:55 | A     |
| 07:21:19 | B     |
| 07:49:42 | B     |

So you want to turn it from this to this. 

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-3_1.svg)

So you decided to add a column called count, and add 1 for each row.

| Time     | Group | Count |
| -------- | ----- | ----- |
| 07:21:54 | A     | 1     |
| 08:06:15 | B     | 1     |
| 08:21:50 | A     | 1     |
| 07:07:55 | A     | 1     |
| 07:21:19 | B     | 1     |
| 07:49:42 | B     | 1     |

Then you plot it out. 

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-1.svg)

Geez... Okay that's obvious. Just plot every 1 out isn't help. That's why aggregation comes to the rescue!

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-5.svg)

So we try to create time bucket for 5 minute, then we group the time nearest to the bucket value.

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-6.svg)

Then we try to count objects inside each of the bucket

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-7.svg)

Our data becomes like this. 

| Time     | Group | Count |
| -------- | ----- | ----- |
| 07:20:00 | A     | 2     |
| 08:05:00 | B     | 1     |
| 08:20:00 | A     | 1     |
| 07:05:00 | A     | 1     |
|          |       |       |
| 07:45:00 | B     | 1     |

Then we can plot it out nicely!

![img](https://admin.mlnotetaking.com/content/images/2019/09/Asset-3_1.svg)

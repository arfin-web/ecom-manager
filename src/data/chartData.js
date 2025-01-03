const chartData = [
    { date: "2024-04-01", sale: 222, return: 150 },
    { date: "2024-04-02", sale: 97, return: 180 },
    { date: "2024-04-03", sale: 167, return: 120 },
    { date: "2024-04-04", sale: 242, return: 260 },
    { date: "2024-04-05", sale: 373, return: 290 },
    { date: "2024-04-06", sale: 301, return: 340 },
    { date: "2024-04-07", sale: 245, return: 180 },
    { date: "2024-04-08", sale: 409, return: 320 },
    { date: "2024-04-09", sale: 59, return: 110 },
    { date: "2024-04-10", sale: 261, return: 190 },
    { date: "2024-04-11", sale: 327, return: 350 },
    { date: "2024-04-12", sale: 292, return: 210 },
    { date: "2024-04-13", sale: 342, return: 380 },
    { date: "2024-04-14", sale: 137, return: 220 },
    { date: "2024-04-15", sale: 120, return: 170 },
    { date: "2024-04-16", sale: 138, return: 190 },
    { date: "2024-04-17", sale: 446, return: 360 },
    { date: "2024-04-18", sale: 364, return: 410 },
    { date: "2024-04-19", sale: 243, return: 180 },
    { date: "2024-04-20", sale: 89, return: 150 },
    { date: "2024-04-21", sale: 137, return: 200 },
    { date: "2024-04-22", sale: 224, return: 170 },
    { date: "2024-04-23", sale: 138, return: 230 },
    { date: "2024-04-24", sale: 387, return: 290 },
    { date: "2024-04-25", sale: 215, return: 250 },
    { date: "2024-04-26", sale: 75, return: 130 },
    { date: "2024-04-27", sale: 383, return: 420 },
    { date: "2024-04-28", sale: 122, return: 180 },
    { date: "2024-04-29", sale: 315, return: 240 },
    { date: "2024-04-30", sale: 454, return: 380 },
    { date: "2024-05-01", sale: 165, return: 220 },
    { date: "2024-05-02", sale: 293, return: 310 },
    { date: "2024-05-03", sale: 247, return: 190 },
    { date: "2024-05-04", sale: 385, return: 420 },
    { date: "2024-05-05", sale: 481, return: 390 },
    { date: "2024-05-06", sale: 498, return: 520 },
    { date: "2024-05-07", sale: 388, return: 300 },
    { date: "2024-05-08", sale: 149, return: 210 },
    { date: "2024-05-09", sale: 227, return: 180 },
    { date: "2024-05-10", sale: 293, return: 330 },
    { date: "2024-05-11", sale: 335, return: 270 },
    { date: "2024-05-12", sale: 197, return: 240 },
    { date: "2024-05-13", sale: 197, return: 160 },
    { date: "2024-05-14", sale: 448, return: 490 },
    { date: "2024-05-15", sale: 473, return: 380 },
    { date: "2024-05-16", sale: 338, return: 400 },
    { date: "2024-05-17", sale: 499, return: 420 },
    { date: "2024-05-18", sale: 315, return: 350 },
    { date: "2024-05-19", sale: 235, return: 180 },
    { date: "2024-05-20", sale: 177, return: 230 },
    { date: "2024-05-21", sale: 82, return: 140 },
    { date: "2024-05-22", sale: 81, return: 120 },
    { date: "2024-05-23", sale: 252, return: 290 },
    { date: "2024-05-24", sale: 294, return: 220 },
    { date: "2024-05-25", sale: 201, return: 250 },
    { date: "2024-05-26", sale: 213, return: 170 },
    { date: "2024-05-27", sale: 420, return: 460 },
    { date: "2024-05-28", sale: 233, return: 190 },
    { date: "2024-05-29", sale: 78, return: 130 },
    { date: "2024-05-30", sale: 340, return: 280 },
    { date: "2024-05-31", sale: 178, return: 230 },
    { date: "2024-06-01", sale: 178, return: 200 },
    { date: "2024-06-02", sale: 470, return: 410 },
    { date: "2024-06-03", sale: 103, return: 160 },
    { date: "2024-06-04", sale: 439, return: 380 },
    { date: "2024-06-05", sale: 88, return: 140 },
    { date: "2024-06-06", sale: 294, return: 250 },
    { date: "2024-06-07", sale: 323, return: 370 },
    { date: "2024-06-08", sale: 385, return: 320 },
    { date: "2024-06-09", sale: 438, return: 480 },
    { date: "2024-06-10", sale: 155, return: 200 },
    { date: "2024-06-11", sale: 92, return: 150 },
    { date: "2024-06-12", sale: 492, return: 420 },
    { date: "2024-06-13", sale: 81, return: 130 },
    { date: "2024-06-14", sale: 426, return: 380 },
    { date: "2024-06-15", sale: 307, return: 350 },
    { date: "2024-06-16", sale: 371, return: 310 },
    { date: "2024-06-17", sale: 475, return: 520 },
    { date: "2024-06-18", sale: 107, return: 170 },
    { date: "2024-06-19", sale: 341, return: 290 },
    { date: "2024-06-20", sale: 408, return: 450 },
    { date: "2024-06-21", sale: 169, return: 210 },
    { date: "2024-06-22", sale: 317, return: 270 },
    { date: "2024-06-23", sale: 480, return: 530 },
    { date: "2024-06-24", sale: 132, return: 180 },
    { date: "2024-06-25", sale: 141, return: 190 },
    { date: "2024-06-26", sale: 434, return: 380 },
    { date: "2024-06-27", sale: 448, return: 490 },
    { date: "2024-06-28", sale: 149, return: 200 },
    { date: "2024-06-29", sale: 103, return: 160 },
    { date: "2024-06-30", sale: 446, return: 400 },
]

export default chartData
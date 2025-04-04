function activityNotifications(expenditure, d) {
    let notifications = 0;
    let counts = new Array(201).fill(0);

    for (let i = 0; i < d; i++) {
        counts[expenditure[i]]++;
    }

    const getMedian = (counts, d) => {
        let count = 0;
        let median1 = null;
        let median2 = null;
        for (let i = 0; i < counts.length; i++) {
            count += counts[i];
            if (median1 === null && count >= Math.floor(d / 2)) {
                median1 = i;
            }
            if (median2 === null && count >= Math.floor(d / 2) + 1) {
                median2 = i;
                break;
            }
        }
        return d % 2 === 0 ? (median1 + median2) / 2 : median2;
    };

    for (let i = d; i < expenditure.length; i++) {
        let median = getMedian(counts, d);
        if (expenditure[i] >= 2 * median) {
            notifications++;
        }
        counts[expenditure[i - d]]--;
        counts[expenditure[i]]++;
    }
    return notifications;
}
const object1 = {
    day: 5,
    arr: [2, 3, 4, 2, 3, 6, 8, 4, 5],
};
// const object2 = {
//   day: 4,
//   arr: [1, 2, 3, 4, 4],
// };
// const object3 = {
//   day: 3,
//   arr: [10, 20, 30, 40, 50],
// };
console.time("exampleFunction");

// Gọi hàm cần đo thời gian
console.log(
    "🚀 ~ activityNotifications ~ object1:",
    activityNotifications(object1.arr, object1.day)
);

// Kết thúc đo thời gian và log kết quả
console.timeEnd("exampleFunction");

// console.log(
//   "🚀 ~ activityNotifications ~ object2:",
//   activityNotifications(object2.arr, object2.day)
// );
// console.log(
//   "🚀 ~ activityNotifications ~ object3:",
//   activityNotifications(object3.arr, object3.day)
// );

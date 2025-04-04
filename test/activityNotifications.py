def activityNotifications(expenditure, d):
    notifications = 0
    countingSort = SortDict()
    for i in range(0, d):
        countingSort.add(expenditure[i])

    for idx in range(d, len(expenditure)):
        value = expenditure[idx]
        print(countingSort)

        __medianValue = countingSort.median(d)
        countingSort.add(expenditure[idx])
        countingSort.sub(expenditure[idx-d])
        print('median', __medianValue, countingSort)
        if value >= (__medianValue * 2):
            notifications = notifications + 1
    return notifications


class SortDict:
    def __init__(self, default = {}):
        self.data  = default
    def __str__(self):
        return str(self.data)
    def add(self, key):
        self.data[key] = self.data.get(key, 0) + 1
        self.sortKey()

    def sub(self, key):
        if (self.data.get(key, 0) == 0 or self.data.get(key, 0) - 1 == 0):
            if key in self.data : self.data.pop(key)
        else:
            self.data[key] = int(self.data.get(key, 0)) - 1
    def sortKey(self):
        self.data = { k: self.data[k] for k in sorted(self.data.keys())}

    def median(self, d = 0):
        if d <= 0 :
            return None
        _counts = self.data
        median_left = None
        median_right = None
        count = 0
        for key in _counts:
            count += _counts[key]
            if median_left == None and count >= d // 2: median_left = key
            if median_right == None and count >= ((d // 2) + 1): median_right = key

        return (median_left+median_right) / 2 if d%2 == 0 else median_right
    def getData(self):
        return self.data
arr = [10,20,30,40,50]

print(activityNotifications(arr,3))








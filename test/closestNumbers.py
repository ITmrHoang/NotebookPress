arr = [ -1, -5 ,3, 5, 7, 9 ]

def closestNumbers(arr):
    # Write your code here
    sortArr = arr.copy()
    sortArr.sort()
    arrTem = [[ sortArr[0], sortArr[1]]]
    distance = sortArr[1] - sortArr[0]
    i = 1
    print(len(arrTem))
    while i < len(sortArr) -1 :
      _distance = sortArr[i+1] - sortArr[i]
      if _distance < distance:
          arrTem=[ [sortArr[i], sortArr[i+1]] ]
          distance = _distance
      elif _distance == distance:
          arrTem.append([sortArr[i], sortArr[i+1]])
      i = i+1
    return [lv for item in arrTem for lv in item]


a = closestNumbers(arr)
print(a)

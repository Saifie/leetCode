def boattoSave( arr,limit):
    left = 0;
    right =len(arr)-1
    arr.sort();
    print(arr)

    boat = 0
    while (left <= right):
        if (left == right):
            boat=boat+1
            break;
    
        if (arr[left] + arr[right] <= limit):
            left = left + 1
        boat=boat+1
        right = right - 1
    
  
    return boat

print(boattoSave([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50))

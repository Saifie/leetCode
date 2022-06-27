def FIRST_AND_LAST_POSITION_OF_SORTED_ARRAY(nums,target):
    left=0
    right=len(nums) - 1
    li=[]
    while left <= right:
        mid=left + right//2
        if(nums[mid]==target):
            if(mid==0 or nums[mid-1]!=target):
                li.append(mid)
                break
            right=right-1
        elif (nums[mid]> target):
            right=right-1
        else:
            left=left+1
    while left <= right:
        mid=left + right//2
        if(nums[mid]==target):
            if(mid==0 or nums[mid+1]!=target):
                li.append(mid)
                break
            left=left+1
        elif (nums[mid]> target):
            right=right-1
        else:
            left=left+1
    return li        

print(FIRST_AND_LAST_POSITION_OF_SORTED_ARRAY([10, 11, 11, 11, 14, 15], 11))


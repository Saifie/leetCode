def MoveZero(array):
    value=0
    n=len(array)
    for i in range(n):
        if(array[i]!=0):
            array[value]=array[i]
            value+=1
    for i in range(value,n):
        array[i]=0

    print("",array)        
    return array        


MoveZero([1,2,0,3,0,0,0,5])        
<!-- here we talk all about Async code  -->

# In javaScript all the work done is synchronous => execution of code line by line not by 


# js is single threaded language means all the things are executed on singal thread, if we run every thing on single thread that means this language must be slow...

# defualt javascript behaviour is schnchrones and single treaded as we want to change the stuff so we need to push accodingly

# blocking code VS   Non Blocking code 
# blocking code is block the flow of program //example: just if u come to my home and i am busy to bring you a glass of water and sying a don't open album of family i have to also watch this so this is what we are doing we are blocking someone 

# in Non- blocking code we give a liberty to the guest weather he can move and took albumn and take picture from that it just ;

# blocking and non blocking both have used case

# WebApi only meet in browser only in browser 
# task_Queue is the only thing which help javascript to be fast and asynchronoues  

# Trick question 
# if the settime out is zero is it must be esecuted within a 0 time just take a example :
1 
settime(0,console.log(2))
3
output: 1,3,2 why 2 executed late becuase when settime reach to the webapi it goes ti task Queue and and added to stack again within time been step 3 executed and then settimeout executed

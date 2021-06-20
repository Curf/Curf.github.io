# Maximum Likelihood Estimators


## Likelihood



<img width="300" alt="Screen Shot 2021-06-18 at 3 23 19 PM" src="https://user-images.githubusercontent.com/26121178/122607822-2b258000-d049-11eb-942b-ad9f95449128.png">


## Logistic Regression 

If we do a binary classification (_positive_ or _negative_) we want our output to give us some probability of the class being _positive_ class. 
This doesn't work with linear regression because we can get large negative or large positive outputs beyond any actual meaning for relative likelihood. Therefore, we need a different function to transform our data. Ideally, this will be a value between 0 and 1 to that we can simply say that the likelihood of _positive_ class is g(x) and the _negative_ class is 1-g(x).

The sigmoid (aka logistic) function works perfectly to achieve this!

---

**Sigmoid Function Equation:**
<img src="https://user-images.githubusercontent.com/26121178/122606731-658e1d80-d047-11eb-896f-bb888b468ed0.png" alt="sig_func" width="300"/> 

<img src="https://user-images.githubusercontent.com/26121178/122606827-91110800-d047-11eb-8d97-9a9bbc79e4c4.png" alt="sig_graph" width="300"/> 

_Large negative inputs tend towards 0 and large positive inputs tend towards 1_

---

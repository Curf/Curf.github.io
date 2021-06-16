file giving intuitive overview of distribution functions.


# Distributions

## Bernoulli Distribution
The discrete probability distribution of a random variable which takes the value 1 with probability p and the value 0 with probability q=1-p. 

In other words, distribution over a SINGLE binary variable, where **the two probability must sum to 1**

Example: A 'fair' coin would have equal probability of 'heads' (class 1) and 'tails' (class 0), thus p = 0.5, q = 1-0.5 = 0.5

---

<img width="357" alt="Screen Shot 2021-06-16 at 12 50 57 PM" src="https://user-images.githubusercontent.com/26121178/122260703-92083500-cea1-11eb-985f-7e141d176d6a.png">

---

### Properties

* Pr(x=1) = p
* Pr(x=0) = 1-p
* Pr(x=_x_) = p^(x)\*(1-p)^(1-x)
* E[x] = p
* Var(x) = p(1-p)

## Categorical Distribution (aka Multinoulli Distribution)
Distribution over a single discrete variable with _k_ different staes, where _k_ is finite.

### Properties

* The distribution is parameterized by vector, p=(p_1,...p_k), 
* p_i gives proability of the i_th state 
* sum of p_i to p_k == 1

## Gaussian Distribution (aka 'normal')

Most commly used over real numbers 

---

![image](https://user-images.githubusercontent.com/26121178/122265504-d4804080-cea6-11eb-8de5-a5177acc4e16.png)

---


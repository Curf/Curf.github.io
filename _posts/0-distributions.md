file giving intuitive overview of distribution functions.


# Distributions - Probability Distribution Functions (PDFs)

## Mixtures of Distributions
Starting off here because it is important for deep learning and is a combination of any following distributions.

A mixture distribution decides which component distribution it should use by sampling a component identify from the Categorical distribution:

---

![image](https://user-images.githubusercontent.com/26121178/122449914-686c0e00-cf74-11eb-8267-e3ea1ddd0e34.png)

P(c) is the Categorical distribution over component identities.

_example of mixture distribution model - Gaussian Mixture Models (GMM)
_
---

**Note about Latent Variables**
P(x,c)=P(x|c)P(c) is the join distribution
* P(c) is the distribution over the latent variable
* P(x|c) is the is the distribution relating latent variables to visible variables determines the shape of the distribution P(x), even though it is possible to describe P(x) without the latent variable.

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
Distribution over a single discrete variable with _k_ different states, where _k_ is finite.

### Properties

* The distribution is parameterized by vector, p=(p_1,...p_k), 
* p_i gives probability of the i_th state 
* sum of p_i to p_k == 1

## Gaussian Distribution (aka 'normal')

Most commonly used over real numbers.  They are the most sensible choice for most applications when no prior knowledge about the distribution.

### Properties

Two important aspects that make it a good default:
* Central Limit Theorem - variables are normally distributed with some degree of noise (even if the true system has more structure)
* Maximum uncertainty encoded - it inserts the least amount of prior knowledge into the model.

There is more about the multivariate normal distribution and use pf precision matrix B that can be covered

---

![image](https://user-images.githubusercontent.com/26121178/122265504-d4804080-cea6-11eb-8de5-a5177acc4e16.png)

* u (mean, E[x]=u): any real number
  * gives coordinate of the central peak  
* o (standard deviation): 0, inf
  * o^2 is the variance

---

## Exponential and Laplace Distributions

For deep learning we want a sharp point at x=0, so exponential distribution is useful.  It will assign probability zero to all negative values of x.

Similarly, the Laplace distribution places a sharp peak of probability mass at some point, _u_.

---

### Exponential 
**Exponential Distribution is the probability distribution of the time between events in a Poisson point process.**

<img src="https://user-images.githubusercontent.com/26121178/122447243-88e69900-cf71-11eb-9cf5-52024c95fc82.png" alt="expo" width="200"/> 


### Laplace
<img src="https://user-images.githubusercontent.com/26121178/122447380-aca9df00-cf71-11eb-905f-3feb78d05411.png" alt="laplace" width="200"/> 

---

## Dirac and Empirical Distributions

### Dirac
Dirac Delta function (which gets us the distribution) clusters probability mass around a single point.  
* It is a _generalized function_, meaning it is defined by how it acts when integrated, not x values

### Empirical

**Empirical distribution** uses the Dirac Delta distribution a component

* **Empirical distribution is the distribution we sample from for training.  ALSO, it is the probability density that maximized the likelihood of the training data**
* Dirac delta distribution is only needed here for continuous variables
* For discrete variables it becomes a **Categorical Distribution**, with each input having a probability equal to the empirical frequency of that value in the dataset.


# The gist...

"Minimizing the KL divergence corresponds exactly to minimizing the cross entropy between distributions.  Many authors use the term 'cross-entropy' to identify specifically the negative log-likelihood of a Bernoulli or softmax distribution, but this is a misnomer.  

**Any loss consisting of of a negative log-likelihood is a cross-entropy between the empirical distribution defined by the training set and the probability distribution defined by the model.**  

**EX: mean squared error is the cross-entropy between the empirical distribution and a Gaussian model."** [1]

[1]_Goodfellow, Ian, Yoshua Bengio, and Aaron Courville. Deep learning. MIT press, 2016__

[Here](https://glassboxmedicine.com/2019/12/07/connections-log-likelihood-cross-entropy-kl-divergence-logistic-regression-and-neural-networks/) is a good article about Log Likelihood, Cross-entropy, and KL-divergence - the end includes specific output scenarios.

# KL-Divergence

![image](https://user-images.githubusercontent.com/26121178/128054648-dd9771f9-d34d-45a3-9f66-76e4d7437296.png)


Can be thought of as...
* it’s the relative entropy of g with respect to f
* it’s a measure of the information gained when one revises one’s beliefs from the prior probability distribution f to the posterior probability distribution g
* it’s the amount of information lost when f is used to approximate g

_Where g is the true distribution and f is the model's approximation_

## Minimization

![image](https://user-images.githubusercontent.com/26121178/128054498-5c5349fe-e7f5-4d24-9051-a6e5d91c1965.png)


The KL-divergence includes a term that depends ONLY on the y-data itself (term in blue), of which is fixed.  Thus, it is NOT dependent on the likelihood y-hat (predicted probabilities) or the parameters of the model.

* **NOTE - this means that the same parameters required to minimize the cross-entropy and negative log-likelihood**


## Notes about KL-div

 - KL-Divergence is non-negative
 - equals 0 if and only if the two distributions are the same (discrete variables) or equal 'almost everywhere' for continuous variables
 - KL-divergence is NOT a true distance measurement because it is not symmetric --> i.e. D_kl (P||Q) != D_kl(Q||P)

# Cross-Entropy (to be continued)

**Formal Definition**:  "expected number of bits needed to communicate the value taken by X if we use the optimal coding scheme for the distribution."

Closely related to KL-divergence.

More generalized version of Log-loss (aka. negative log-likelihood)

# voterify
  
This is the public repo of the live site hosted here: http://votery.org  
The goal is to make an easy way for people to vote using cell phones and SMS.
  
Colaboration is welcome.  

In order for this project to run locally, you'll need to contact me  for the API secrets folder in `/functions/`  
voterify at ![g mail](https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png)
  
[Download Architecture Map](https://lucid.app/publicSegments/view/6d41b234-38a2-451d-b95e-b3795699174c) compliments of LucidChart.com   
  
## Project setup
This project is based on Google Firebase, Vue JS and Bulma.   
Run Prettier extensions on save.  
  
### SSH
Create an SSH key where you plan to work  
* `ssh-keygen` - create the key, usually in .ssh/id_rsa  
* Add the key to GitHub  
* Start ssh agent `eval "$(ssh-agent -s)"`
* Add your ssh to shh agent `ssh-add` 
* Check if your ssh is already added `ssh-add -l`

### API
todo: replace firebase with Azure oauth, data factory and api

### Installation
```
yarn
```


### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Deployment
```
firebase deploy
```

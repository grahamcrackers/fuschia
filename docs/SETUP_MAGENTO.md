# Setting up a Mangento Store

- https://github.com/markshust/docker-magento
  - Creates a simple store with no data solutions modules enabled
- https://github.com/rossbrandon/docker-magento
  - Ross's docker set up (it's a bit behind but includes data solutions modules)

# Install Sample Data
If following Mark Shust's docker set up, it's in the documentation, but for some reason won't install sample data if you are on the 2.4-develop branch.

```bash
bin/magento sampledata:deploy
bin/magento setup:upgrade
```

- Disable 2FA for development that's included in 2.4.6
  - https://github.com/markshust/magento2-module-disabletwofactorauth

 
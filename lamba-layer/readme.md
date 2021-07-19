# lambda-layer

Note - first revision, don't consider this as even a sketch yet...

Building

```
./stage-mods.sh
sls deploy
```

Publish message, get logs

```
aws sns publish --topic-arn arn:aws:sns:us-east-1:$ACCOUNT_NO:FilterMe \
--message '{"foo": true, "foostuff":"xxx"}'

sls logs --function dispatcher
```
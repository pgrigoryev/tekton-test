tkn pipelineruns delete application-pipeline-run{2..7}
kubectl delete pod --field-selector=status.phase==Succeeded
tkn pipelineruns describe application-pipeline-run4

#$PSVersionTable.PSVersion
#Get-Verb

#Get-Command

#az Get-Help

Get-Command -Noun File*  # commands in PS start with verb then a hiphen - followed by a noun in this case command is a noun and get is a verb
Get-Command -Verb Get*  # we can filter command based on both nouns and verbs and apply pattern matching as well using wildcards


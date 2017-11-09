const Fixture = {}

Fixture.oneEmptyQueue = [
  `{ "type": 4, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Response": "Success","CoreStartupDate": "2017-11-01","CoreStartupTime": "18:43:57","CoreReloadDate": "2017-11-01","CoreReloadTime": "18:43:57","CoreCurrentCalls": "0"}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueParams","Queue": "TechSupport","Max": "0","Strategy": "ringall","Calls": "0","Holdtime": "0","TalkTime": "0","Completed": "0","Abandoned": "0","ServiceLevel": "0","ServicelevelPerf": "0.0","Weight": "0"}}`
]

Fixture.oneQueueWithOneMemeberNoCallers = [
  `{ "type": 4, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Response": "Success","CoreStartupDate": "2017-11-01","CoreStartupTime": "18:43:57","CoreReloadDate": "2017-11-01","CoreReloadTime": "18:43:57","CoreCurrentCalls": "0"}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueParams","Queue": "TechSupport","Max": "0","Strategy": "ringall","Calls": "0","Holdtime": "0","TalkTime": "0","Completed": "0","Abandoned": "0","ServiceLevel": "0","ServicelevelPerf": "0.0","Weight": "0"}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueMember","Queue": "TechSupport","Name": "1004@sc360.modulis.clusterpbx.ca","Location": "Local/1004@from-queue/n","StateInterface": "Local/1004@from-queue/n","Membership": "static","Penalty": "0","CallsTaken": "0","LastCall": "0","InCall": "0","Status": "4","Paused": "1","PausedReason": ""}}`
]

Fixture.oneQueueWithOneMemeberOneCaller = [
  `{ "type": 4, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Response": "Success","CoreStartupDate": "2017-11-01","CoreStartupTime": "18:43:57","CoreReloadDate": "2017-11-01","CoreReloadTime": "18:43:57","CoreCurrentCalls": "0"}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueParams","Queue": "TechSupport","Max": "0","Strategy": "ringall","Calls": "0","Holdtime": "0","TalkTime": "0","Completed": "0","Abandoned": "0","ServiceLevel": "0","ServicelevelPerf": "0.0","Weight": "0"}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueMember","Queue": "TechSupport","Name": "1004@sc360.modulis.clusterpbx.ca","Location": "Local/1004@from-queue/n","StateInterface": "Local/1004@from-queue/n","Membership": "static","Penalty": "0","CallsTaken": "0","LastCall": "0","InCall": "0","Status": "4","Paused": "1","PausedReason": ""}}`,
  `{ "type": 3, "server_id": 1, "server_name": "asterisk01.local", "ssl": false, "data": {"Event": "QueueEntry","Queue": "TechSupport","Position": "1","Channel": "SIP/router01-0013ab9e","Uniqueid": "1509489741.3343730","CallerIDNum": "14383918247","CallerIDName": "14383918247","ConnectedLineNum": "unknown","ConnectedLineName": "unknown","Wait": "549"}}`
]

export default Fixture
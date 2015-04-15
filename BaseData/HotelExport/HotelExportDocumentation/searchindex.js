
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['BaseData.xsd', 'basedata_xsd.html'];
fr[2]=['DescIdAttributeGroup', 'descidattributegroup.html'];
fr[3]=['DescId', 'descid.html'];
fr[4]=['Desc', 'desc.html'];
fr[5]=['Desc', 'desc1.html'];
fr[6]=['DestinationAttributes', 'destinationattributes.html'];
fr[7]=['Code', 'code.html'];
fr[8]=['CountryCode', 'countrycode.html'];
fr[9]=['PhoneAttributes', 'phoneattributes.html'];
fr[10]=['AreaCode', 'areacode.html'];
fr[11]=['CountryPrefix', 'countryprefix.html'];
fr[12]=['Number', 'number.html'];
fr[13]=['Translation', 'translation.html'];
fr[14]=['de', 'de.html'];
fr[15]=['en', 'en.html'];
fr[16]=['fr', 'fr.html'];
fr[17]=['it', 'it.html'];
fr[18]=['BaseDataExport.xsd', 'basedataexport_xsd.html'];
fr[19]=['AddAmountAttributeGroup', 'addamountattributegroup.html'];
fr[20]=['AddAmount', 'addamount.html'];
fr[21]=['BabyChildAttributeGroup', 'babychildattributegroup.html'];
fr[22]=['Baby', 'baby.html'];
fr[23]=['Child', 'child.html'];
fr[24]=['ChildIdxNrAttributeGroup', 'childidxnrattributegroup.html'];
fr[25]=['ChildIdxNr', 'childidxnr.html'];
fr[26]=['DateFromToAttributeGroup', 'datefromtoattributegroup.html'];
fr[27]=['DateFrom', 'datefrom.html'];
fr[28]=['DateTo', 'dateto.html'];
fr[29]=['DateRelevantAttributeGroup', 'daterelevantattributegroup.html'];
fr[30]=['EndDateRelevant', 'enddaterelevant.html'];
fr[31]=['StartDateRelevant', 'startdaterelevant.html'];
fr[32]=['DayAttributeGroup', 'dayattributegroup.html'];
fr[33]=['Day', 'day.html'];
fr[34]=['DaysDateBeforeDepartureAttributeGroup', 'daysdatebeforedepartureattributegroup.html'];
fr[35]=['DateBeforeDepartureFrom', 'datebeforedeparturefrom.html'];
fr[36]=['DateBeforeDepartureTo', 'datebeforedepartureto.html'];
fr[37]=['DaysBeforeDepartureFrom', 'daysbeforedeparturefrom.html'];
fr[38]=['DaysBeforeDepartureTo', 'daysbeforedepartureto.html'];
fr[39]=['SellGeneralAttributeGroup', 'sellgeneralattributegroup.html'];
fr[40]=['AgeFrom', 'agefrom.html'];
fr[41]=['AgeTo', 'ageto.html'];
fr[42]=['NotSpecialRelevant', 'notspecialrelevant.html'];
fr[43]=['Price', 'price.html'];
fr[44]=['Type', 'type.html'];
fr[45]=['SpecialCommissionAttributeGroup', 'specialcommissionattributegroup.html'];
fr[46]=['SpecialCommission', 'specialcommission.html'];
fr[47]=['SpecialCommissionFlag', 'specialcommissionflag.html'];
fr[48]=['WeekdaysValidAttributeGroup', 'weekdaysvalidattributegroup.html'];
fr[49]=['WeekdaysValid', 'weekdaysvalid.html'];
fr[50]=['AddPerDayPriceAttributes', 'addperdaypriceattributes.html'];
fr[51]=['AddPerDayPricesChildren', 'addperdaypriceschildren.html'];
fr[52]=['AddPerDayPrice', 'addperdayprice.html'];
fr[53]=['AddPeriodPriceAttributes', 'addperiodpriceattributes.html'];
fr[54]=['AddPeriodPricesChildren', 'addperiodpriceschildren.html'];
fr[55]=['AddPeriodPrice', 'addperiodprice.html'];
fr[56]=['EarlyBookingAttributes', 'earlybookingattributes.html'];
fr[57]=['ForAllDays', 'foralldays.html'];
fr[58]=['ForceDisplay', 'forcedisplay.html'];
fr[59]=['FromDay', 'fromday.html'];
fr[60]=['MaxNrNights', 'maxnrnights.html'];
fr[61]=['Percent', 'percent.html'];
fr[62]=['SpecialCommission', 'specialcommission1.html'];
fr[63]=['ToDay', 'today.html'];
fr[64]=['EarlyBookingsChildren', 'earlybookingschildren.html'];
fr[65]=['EarlyBooking', 'earlybooking.html'];
fr[66]=['ItemInfoChildren', 'iteminfochildren.html'];
fr[67]=['BeginDate', 'begindate.html'];
fr[68]=['EndDate', 'enddate.html'];
fr[69]=['External', 'external.html'];
fr[70]=['Invoice', 'invoice.html'];
fr[71]=['Itinerary', 'itinerary.html'];
fr[72]=['Text', 'text.html'];
fr[73]=['Title', 'title.html'];
fr[74]=['de', 'de1.html'];
fr[75]=['en', 'en1.html'];
fr[76]=['fr', 'fr1.html'];
fr[77]=['it', 'it1.html'];
fr[78]=['Type', 'type1.html'];
fr[79]=['ItemInfos', 'iteminfos.html'];
fr[80]=['ItemInfo', 'iteminfo.html'];
fr[81]=['OneTimeAttributes', 'onetimeattributes.html'];
fr[82]=['AlwaysApply', 'alwaysapply.html'];
fr[83]=['OneTimesChildren', 'onetimeschildren.html'];
fr[84]=['OneTime', 'onetime.html'];
fr[85]=['PerDayPriceAttributes', 'perdaypriceattributes.html'];
fr[86]=['PerDayPricesChildren', 'perdaypriceschildren.html'];
fr[87]=['PerDayPrice', 'perdayprice.html'];
fr[88]=['PeriodPriceAttributes', 'periodpriceattributes.html'];
fr[89]=['MaxNrNights', 'maxnrnights1.html'];
fr[90]=['PeriodPricesChildren', 'periodpriceschildren.html'];
fr[91]=['PeriodPrice', 'periodprice.html'];
fr[92]=['SpecialOfferAttributes', 'specialofferattributes.html'];
fr[93]=['ChildAdultNr', 'childadultnr.html'];
fr[94]=['ChildChildNr', 'childchildnr.html'];
fr[95]=['Days', 'days.html'];
fr[96]=['FromDayBase', 'fromdaybase.html'];
fr[97]=['LastSpOffEndDate', 'lastspoffenddate.html'];
fr[98]=['PayNights', 'paynights.html'];
fr[99]=['RevolvingGroup', 'revolvinggroup.html'];
fr[100]=['RuleType', 'ruletype.html'];
fr[101]=['SaveNights', 'savenights.html'];
fr[102]=['SpecialCommission', 'specialcommission2.html'];
fr[103]=['ToDayBase', 'todaybase.html'];
fr[104]=['Type', 'type2.html'];
fr[105]=['SpecialOffersChildren', 'specialofferschildren.html'];
fr[106]=['SpecialOffer', 'specialoffer.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['--created',[1,18]],
['with',[1,18,45,46,56,58,92,96,99,103]],
['liquid',[1,18]],
['designer',[1,18]],
['edition',[1,18]],
['http',[1,18]],
['liquid-technologies',[1,18]],
['schema',[1,18]],
['elementformdefault',[1,18]],
['qualified',[1,18]],
['xmlns',[1,18]],
['xmlschema',[1,18]],
['complextype',[1,4,5,6,9,13,18,50,51,53,54,56,64,66,73,79,81,83,85,86,88,90,92,105]],
['name',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106]],
['desc',[1,2,3,4,5]],
['annotation',[1,2,3,4,5,6,7,8,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,56,57,58,59,60,61,62,63,66,67,68,72,73,78,92,93,94,95,96,97,98,99,100,101,102,103,104]],
['documentation',[1,2,3,4,5,6,7,8,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,56,57,58,59,60,61,62,63,66,67,68,72,73,78,92,93,94,95,96,97,98,99,100,101,102,103,104]],
['sequence',[1,4,13,18,51,54,64,79,83,86,90,105]],
['element',[1,4,5,13,14,15,16,17,18,51,52,54,55,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,84,86,87,90,91,92,99,105,106]],
['minoccurs',[1,4,5,13,14,15,16,17,18,51,52,54,55,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,84,86,87,90,91,105,106]],
['maxoccurs',[1,4,5,18,51,52,54,55,64,65,79,80,83,84,86,87,90,91,105,106]],
['unbounded',[1,4,5,18,51,52,54,55,64,65,79,80,83,84,86,87,90,91,105,106]],
['every',[1,4,5]],
['descid',[1,2,3,4,5,39,50,52,53,55,56,65,81,84,85,87,88,91,92,106]],
['translations',[1,4,5]],
['this',[1,4,5,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,43,45,46,48,49,56,59,60,63,92,93,94,95,96,97,98,99,101,103]],
['price',[1,2,3,4,5,18,24,25,26,27,28,32,33,39,40,41,42,43,44,45,46,48,49,50,52,53,55,56,58,62,81,84,85,87,88,91,92,102]],
['line',[1,4,5,18,39,40,41,45,46,56,62,92,102]],
['attribute',[1,2,3,4,5,6,7,8,9,10,11,12,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,56,57,58,59,60,61,62,63,81,82,88,89,92,93,94,95,96,97,98,99,100,101,102,103,104]],
['which',[1,2,3,4,5,18,26,27,28,32,33,39,40,41,45,46,56,59,60,63,92,95,99,104]],
['identifies',[1,4,5]],
['text',[1,4,5,18,66,72,80]],
['appropriate',[1,4,5]],
['placing',[1,4,5]],
['reference',[1,4,5]],
['list',[1,4,5]],
['reduces',[1,4,5]],
['size',[1,2,3,4,5]],
['dramatically',[1,4,5]],
['also',[1,4,5]],
['built',[1,4,5]],
['faster',[1,4,5]],
['than',[1,4,5,18,29,30,31,34,35,36,37,38]],
['added',[1,4,5,18,19,20]],
['each',[1,4,5,18,92,99]],
['node',[1,2,3,4,5,18,24,25,66,73,92,99]],
['complexcontent',[1,4,5]],
['extension',[1,4,5]],
['base',[1,4,5,18,21,22,23,24,25,39,40,41,42,44,45,47,56,57,58,66,69,70,71,78,81,82,92,104]],
['translation',[1,4,5,13,18,66,72]],
['attributegroup',[1,2,4,5,18,19,21,24,26,29,32,34,39,45,48,50,53,56,81,85,88,92]],
['descidattributegroup',[1,2,4,5,18,39,56,92]],
['type',[1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,27,28,29,30,31,32,33,34,35,36,37,38,39,43,44,45,46,48,49,50,51,52,53,54,55,56,59,60,61,62,63,64,65,66,67,68,72,73,74,75,76,77,78,79,80,81,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106]],
['string',[1,6,7,8,9,10,11,12,13,14,15,16,17,18,39,44,48,49,66,73,74,75,76,77,78,92,100,104]],
['german',[1,13,14]],
['cdata',[1,13,14,15,16,17]],
['english',[1,13,15]],
['french',[1,13,16]],
['italian',[1,13,17]],
['phoneattributes',[1,9]],
['areacode',[1,9,10]],
['number',[1,9,12,18,34,37,38,56,60,92,93,95,96,99,103]],
['required',[1,2,3,5,6,7,8,9,12,18,26,27,28,32,33,39,43,50,52,53,55,56,65,81,84,85,87,88,91,92,106]],
['countryprefix',[1,9,11]],
['destinationattributes',[1,6]],
['countrycode',[1,6,8]],
['2-letter',[1,6,8]],
['country',[1,6,8,18,66,78]],
['code',[1,6,7,8]],
['based',[1,6,8]],
['destination',[1,6,7,8,18,66,78]],
['iata',[1,6,7]],
['dest',[1,6,7]],
['nonnegativeinteger',[1,2,3,18,21,22,23,24,25,34,37,38,39,40,41,42,45,47,56,57,58,59,60,63,66,69,70,71,81,82,88,89,92,93,94,95,96,98,99,101,103]],
['order',[1,2,3]],
['prevent',[1,2,3]],
['duplication',[1,2,3]],
['data',[1,2,3]],
['export',[1,2,3,18,92,99]],
['would',[1,2,3,18,24,25,92,96,99,103]],
['exponentially',[1,2,3]],
['increase',[1,2,3]],
['file',[1,2,3]],
['common',[1,2,3,18,92,99]],
['texts',[1,2,3]],
['lines',[1,2,3,18,24,25,39,42]],
['stored',[1,2,3]],
['referenced',[1,2,3]],
['descs',[1,2,3]],
['preis',[1,2,3]],
['person',[1,2,3,18,39,43,44]],
['nacht',[1,2,3]],
['prix',[1,2,3]],
['personne',[1,2,3]],
['nuit',[1,2,3]],
['perdayprice',[1,2,3,18,86,87]],
['2013-02-01',[1,2,3]],
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106]],
['optional',[9,10,11,18,19,20,21,22,23,24,25,29,30,31,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,50,52,53,55,56,57,58,59,60,61,62,63,65,81,82,84,85,87,88,89,91,92,93,94,95,96,97,98,99,100,101,102,103,104,106]],
['include',[18]],
['schemalocation',[18]],
['\basedata',[18]],
['perdaypriceschildren',[18,86]],
['perdaypriceattributes',[18,85,86,87]],
['sellgeneralattributegroup',[18,39,50,53,81,85,88]],
['dayattributegroup',[18,32,85]],
['childidxnrattributegroup',[18,24,50,53,85,88]],
['periodpriceschildren',[18,90]],
['periodprice',[18,90,91]],
['periodpriceattributes',[18,88,90,91]],
['maxnrnights',[18,56,60,65,88,89,91]],
['datefromtoattributegroup',[18,26,50,53,56,81,88,92]],
['addperiodpriceattributes',[18,53,54,55]],
['weekdaysvalidattributegroup',[18,48,50,53,81]],
['addperiodpriceschildren',[18,54]],
['addperiodprice',[18,54,55]],
['addperdaypriceschildren',[18,51]],
['addperdayprice',[18,51,52]],
['addperdaypriceattributes',[18,50,51,52]],
['onetimeschildren',[18,83]],
['onetime',[18,83,84]],
['onetimeattributes',[18,81,83,84]],
['daterelevantattributegroup',[18,29,56,81,92]],
['babychildattributegroup',[18,21,56,81,92]],
['alwaysapply',[18,81,82,84]],
['simpletype',[18,21,22,23,24,25,39,40,41,42,44,45,47,56,57,58,66,69,70,71,78,81,82,92,104]],
['restriction',[18,21,22,23,24,25,39,40,41,42,44,45,47,56,57,58,66,69,70,71,78,81,82,92,104]],
['enumeration',[18,21,22,23,39,42,44,45,47,56,57,58,66,69,70,71,78,81,82,92,104]],
['value',[18,21,22,23,34,37,38,39,40,41,42,44,45,46,47,56,57,58,60,66,69,70,71,73,78,81,82,92,98,101,104]],
['specialofferschildren',[18,105]],
['specialoffer',[18,19,20,92,99,105,106]],
['specialofferattributes',[18,92,105,106]],
['fromdaybase',[18,92,96,106]],
['from',[18,26,27,34,35,37,39,40,41,56,59,92,96]],
['todaybase',[18,92,103,106]],
['paynights',[18,92,98,101,106]],
['many',[18,92,98,101]],
['nights',[18,56,60,92,98,101]],
['does',[18,92,98,101]],
['customer',[18,92,98,101]],
['effectively',[18,92,98,101]],
['have',[18,24,25,45,46,92,98,99,101,104]],
['fromday',[18,56,59,65,92,98,101]],
['today',[18,56,63,65,92,98,101]],
['then',[18,24,25,39,40,41,43,45,46,56,57,92,98,99,101,104]],
['book',[18,92,98,99,101]],
['days',[18,34,37,38,56,57,92,95,98,99,101,106]],
['pays',[18,92,98,101]],
['savenights',[18,92,98,101,106]],
['mutually',[18,34,35,36,37,38,92,98,101]],
['exclusive',[18,34,35,36,37,38,92,98,101]],
['only',[18,21,22,23,48,49,66,73,92,98,101]],
['attributes',[18,92,98,100,101]],
['allowed',[18,92,98,99,101]],
['save',[18,92,101]],
['describes',[18,92,104]],
['amounts',[18,92,104]],
['prices',[18,92,104]],
['need',[18,45,46,92,104]],
['used',[18,92,99,100,104]],
['when',[18,19,20,34,35,39,42,66,67,68,92,104]],
['determining',[18,92,104]],
['special',[18,19,20,21,22,23,29,30,31,34,35,36,37,38,39,42,45,46,56,60,62,92,93,94,95,97,99,100,102,104]],
['offer',[18,19,20,21,22,23,34,35,36,37,38,56,60,92,93,94,100,104]],
['amount',[18,19,20,56,57,58,92,104]],
['day1',[18,92,104]],
['day2',[18,92,104]],
['day3',[18,92,104]],
['day4',[18,92,104]],
['day5',[18,92,104]],
['day6',[18,92,104]],
['day7',[18,92,104]],
['enddays',[18,92,104]],
['valid',[18,21,22,23,24,25,26,27,28,32,33,39,40,41,92,93,94,95,97,100,104]],
['will',[18,19,20,92,99,104]],
['startdays',[18,92,104]],
['average',[18,92,104]],
['minvalue',[18,92,104]],
['maxvalue',[18,92,104]],
['lastspoffenddate',[18,92,97,106]],
['date',[18,26,27,28,29,31,32,33,34,35,36,37,38,66,67,68,92,97,99,100]],
['defines',[18,92,97]],
['last',[18,29,30,92,97]],
['possible',[18,92,97]],
['booking',[18,29,30,31,34,35,36,37,38,56,57,59,63,92,97,99]],
['season',[18,92,97]],
['overlapping',[18,92,97]],
['offers',[18,92,97]],
['taken',[18,92,97]],
['calculating',[18,39,42,92,97]],
['hotel',[18,29,30,31,92,97,99]],
['bookin',[18,92,97]],
['ruletype',[18,92,100,106]],
['determines',[18,56,58,92,100]],
['always',[18,92,100]],
['daysbeforedeparturefrom',[18,34,35,36,37,38,56,65,92,100,106]],
['daysbeforedepartureto',[18,34,35,36,37,38,56,65,92,100,106]],
['calculation',[18,92,100]],
['datebeforedeparturefrom',[18,34,35,36,37,38,56,65,92,100,106]],
['datebeforedepartureto',[18,34,35,36,37,38,56,65,92,100,106]],
['specialcommission',[18,39,45,46,50,52,53,55,56,62,65,81,84,85,87,88,91,92,102,106]],
['float',[18,19,20,39,43,45,46,56,61,62,92,102]],
['percentage',[18,24,25,45,46,56,61,62,92,102]],
['commission',[18,45,46,56,62,92,102]],
['internal',[18,24,25,45,47,56,62,92,102]],
['spezflag',[18,45,47,56,62,92,102]],
['must',[18,34,35,36,37,38,39,42,56,62,92,102]],
['childchildnr',[18,92,94,106]],
['baby',[18,21,22,56,65,81,84,92,93,94,106]],
['child',[18,21,23,24,25,56,65,81,84,92,93,94,106]],
['n-th',[18,92,94]],
['equal',[18,29,30,31,92,93,94]],
['first',[18,24,25,92,94]],
['second',[18,24,25,92,94]],
['childadultnr',[18,92,93,106]],
['accompanied',[18,92,93]],
['adults',[18,21,23,24,25,92,93]],
['addamountattributegroup',[18,19,56,92]],
['daysdatebeforedepartureattributegroup',[18,34,56,92]],
['revolvinggroup',[18,92,99,106]],
['some',[18,39,42,92,99]],
['specials',[18,92,99]],
['offered',[18,92,99]],
['revolving',[18,92,99]],
['stay',[18,56,60,92,99]],
['what',[18,92,99]],
['means',[18,92,99]],
['that',[18,24,25,48,49,92,99]],
['basedataexport',[18,92,99]],
['separate',[18,92,99]],
['entity',[18,92,99]],
['corresponding',[18,92,99]],
['user',[18,92,99]],
['interface',[18,92,99]],
['determine',[18,92,99]],
['fits',[18,29,30,31,92,99]],
['best',[18,92,99]],
['given',[18,45,46,92,99]],
['range',[18,24,25,92,99]],
['once',[18,56,57,92,99]],
['been',[18,92,99]],
['again',[18,92,99]],
['important',[18,92,99]],
['case',[18,92,99]],
['affore',[18,92,99]],
['mentioned',[18,92,99]],
['example',[18,45,46,48,49,92,99]],
['cannot',[18,24,25,92,99]],
['part',[18,92,99]],
['rule',[18,34,35,56,59,60,63,92,99]],
['wanted',[18,92,99]],
['able',[18,92,99]],
['entered',[18,92,99]],
['appropriately',[18,92,99]],
['more',[18,92,99]],
['maximum',[18,24,25,56,60,92,99]],
['identify',[18,92,99]],
['belonging',[18,92,99]],
['same',[18,92,99]],
['after',[18,92,99]],
['being',[18,92,99]],
['ignored',[18,39,42,92,99]],
['further',[18,92,99]],
['processing',[18,92,99]],
['earlybookingschildren',[18,64]],
['earlybooking',[18,64,65]],
['earlybookingattributes',[18,56,64,65]],
['early',[18,34,35,36,37,38,56,59,63]],
['relevant',[18,29,30,31,34,35,39,40,41,48,49,56,57,59,60,63]],
['percent',[18,56,61,65]],
['forcedisplay',[18,56,57,58,65]],
['whether',[18,56,58]],
['show',[18,56,58]],
['shown',[18,56,57,58]],
['foralldays',[18,56,57,65]],
['connected',[18,56,60]],
['stays',[18,56,60]],
['different',[18,56,60]],
['field',[18,56,60]],
['identified',[18,56,60]],
['datefrom',[18,26,27,29,31,50,52,53,55,56,65,81,84,88,91,92,106]],
['dateto',[18,26,28,29,30,50,52,53,55,56,65,81,84,88,91,92,106]],
['weekdaysvalid',[18,48,49,50,52,53,55,81,84]],
['seven',[18,48,49]],
['character',[18,48,49]],
['above',[18,48,49]],
['interpreted',[18,48,49]],
['monday',[18,48,49]],
['babies',[18,21,22]],
['children',[18,21,22,23,24,25]],
['startdaterelevant',[18,29,31,56,65,81,84,92,106]],
['boolean',[18,29,30,31]],
['into',[18,29,30,31]],
['period',[18,29,30,31]],
['start',[18,29,31,66,67]],
['greater',[18,29,31]],
['enddaterelevant',[18,29,30,56,65,81,84,92,106]],
['less',[18,29,30]],
['specific',[18,32,33]],
['specialcommissionattributegroup',[18,39,45]],
['note',[18,34,37,38,45,46]],
['supplied',[18,24,25,39,43,45,46]],
['combination',[18,45,46]],
['specialcommissionflag',[18,39,45,46,47,50,52,53,55,81,84,85,87,88,91]],
['normally',[18,19,20,45,46]],
['supplier',[18,45,46]],
['sets',[18,45,46]],
['fixed',[18,45,46]],
['both',[18,45,46]],
['meal',[18,45,46]],
['differs',[18,45,46]],
['normal',[18,45,46]],
['travel',[18,45,46]],
['agent',[18,45,46]],
['addamount',[18,19,20,56,65,92,106]],
['needs',[18,19,20]],
['calculated',[18,19,20]],
['negative',[18,19,20]],
['cost',[18,19,20]],
['breakfast',[18,19,20]],
['included',[18,19,20]],
['default',[18,39,43,44]],
['room',[18,24,25,39,44]],
['agefrom',[18,24,25,39,40,41,50,52,53,55,81,84,85,87,88,91]],
['lower',[18,39,40]],
['inclusive',[18,39,40,66,67,68]],
['bound',[18,39,40,41]],
['ageto',[18,24,25,39,40,41,50,52,53,55,81,84,85,87,88,91]],
['persons',[18,24,25,39,40,41]],
['incl',[18,39,40,41]],
['mininclusive',[18,39,40,41]],
['maxinclusive',[18,39,40,41]],
['non-inclusive',[18,39,41]],
['notspecialrelevant',[18,39,42,50,52,53,55,81,84,85,87,88,91]],
['childidxnr',[18,24,25,50,52,53,55,85,87,88,91]],
['childindexnr',[18,24,25]],
['effective',[18,24,25]],
['additional',[18,24,25]],
['double',[18,24,25]],
['optionally',[18,24,25]],
['allows',[18,24,25]],
['either',[18,24,25,34,35,36,37,38]],
['extra',[18,24,25]],
['following',[18,24,25]],
['type2',[18,24,25]],
['pricelist',[18,24,25]],
['search',[18,24,25]],
['kinderpreisspez',[18,24,25]],
['prozermaessig',[18,24,25]],
['type3',[18,24,25]],
['before',[18,34,37,38]],
['they',[18,34,35,36,37,38]],
['mapped',[18,34,37,38]],
['current',[18,34,37,38]],
['minus',[18,34,37,38]],
['larger',[18,34,37,38]],
['daysbeforedeparture',[18,34,37,38]],
['made',[18,34,35]],
['smaller',[18,34,35,36]],
['iteminfos',[18,79]],
['iteminfo',[18,79,80]],
['iteminfochildren',[18,66,79,80]],
['begindate',[18,66,67,80]],
['information',[18,66,67,68]],
['applies',[18,66,67,68]],
['enddate',[18,66,68,80]],
['item',[18,66,72,78]],
['invoice',[18,66,70,80]],
['itinerary',[18,66,71,80]],
['external',[18,66,69,80]],
['title',[18,66,73,80]],
['info',[18,66,72,73]],
['sent',[18,66,73]],
['exists',[18,66,73]],
['description',[18,66,72]]
 ];
 return w;
}
        
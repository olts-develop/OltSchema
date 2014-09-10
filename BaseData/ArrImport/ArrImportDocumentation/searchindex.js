
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['ArrImport.xsd', 'arrimport_xsd.html'];
fr[2]=['Arrangements', 'arrangements.html'];
fr[3]=['Arrangement', 'arrangement.html'];
fr[4]=['AccountNr', 'accountnr.html'];
fr[5]=['ArrangementItems', 'arrangementitems.html'];
fr[6]=['ArrCode', 'arrcode.html'];
fr[7]=['ArrItemCode', 'arritemcode.html'];
fr[8]=['ArrType', 'arrtype.html'];
fr[9]=['AutomatedFeeCode', 'automatedfeecode.html'];
fr[10]=['Commission', 'commission.html'];
fr[11]=['CostCenter', 'costcenter.html'];
fr[12]=['Country', 'country.html'];
fr[13]=['IsoCode', 'isocode.html'];
fr[14]=['Currency', 'currency.html'];
fr[15]=['Destination', 'destination.html'];
fr[16]=['ExportOffer', 'exportoffer.html'];
fr[17]=['ExtraBedAdults', 'extrabedadults.html'];
fr[18]=['ExtraBedChildren', 'extrabedchildren.html'];
fr[19]=['FixedDate', 'fixeddate.html'];
fr[20]=['InternetBookable', 'internetbookable.html'];
fr[21]=['InvoiceDetail', 'invoicedetail.html'];
fr[22]=['InvoiceTitle', 'invoicetitle.html'];
fr[23]=['IsSpecialOffer', 'isspecialoffer.html'];
fr[24]=['FromDate', 'fromdate.html'];
fr[25]=['SoldOut', 'soldout.html'];
fr[26]=['ToDate', 'todate.html'];
fr[27]=['ItemInfos', 'iteminfos.html'];
fr[28]=['Language', 'language.html'];
fr[29]=['MaximumTotalStay', 'maximumtotalstay.html'];
fr[30]=['MinimumHotelStay', 'minimumhotelstay.html'];
fr[31]=['MinimumTotalStay', 'minimumtotalstay.html'];
fr[32]=['NormalOccupancy', 'normaloccupancy.html'];
fr[33]=['Passive', 'passive.html'];
fr[34]=['FromDate', 'fromdate1.html'];
fr[35]=['PaymentCondition', 'paymentcondition.html'];
fr[36]=['PriceInfo', 'priceinfo.html'];
fr[37]=['Prices', 'prices.html'];
fr[38]=['KeepDataBeforeDate', 'keepdatabeforedate.html'];
fr[39]=['AddPerDayPrices', 'addperdayprices.html'];
fr[40]=['Currencies', 'currencies.html'];
fr[41]=['Currency', 'currency1.html'];
fr[42]=['IdNr', 'idnr.html'];
fr[43]=['IsoCode', 'isocode1.html'];
fr[44]=['Descs', 'descs.html'];
fr[45]=['EarlyBookings', 'earlybookings.html'];
fr[46]=['OneTimes', 'onetimes.html'];
fr[47]=['PerDayPrices', 'perdayprices.html'];
fr[48]=['SpecialOffers', 'specialoffers.html'];
fr[49]=['Region', 'region.html'];
fr[50]=['Request', 'request.html'];
fr[51]=['SubRegion', 'subregion.html'];
fr[52]=['Supplier', 'supplier.html'];
fr[53]=['Code', 'code.html'];
fr[54]=['Nr', 'nr.html'];
fr[55]=['Title', 'title.html'];
fr[56]=['TourboText', 'tourbotext.html'];
fr[57]=['TourboTitle', 'tourbotitle.html'];
fr[58]=['TravelDates', 'traveldates.html'];
fr[59]=['TravelDate', 'traveldate.html'];
fr[60]=['Exclude', 'exclude.html'];
fr[61]=['Fr', 'fr.html'];
fr[62]=['FromDate', 'fromdate2.html'];
fr[63]=['Inactive', 'inactive.html'];
fr[64]=['Mo', 'mo.html'];
fr[65]=['Sa', 'sa.html'];
fr[66]=['Su', 'su.html'];
fr[67]=['Th', 'th.html'];
fr[68]=['ToDate', 'todate1.html'];
fr[69]=['Tu', 'tu.html'];
fr[70]=['We', 'we.html'];
fr[71]=['Action', 'action.html'];
fr[72]=['Key', 'key.html'];
fr[73]=['System', 'system.html'];
fr[74]=['Type', 'type.html'];
fr[75]=['BasedataImport.xsd', 'basedataimport_xsd.html'];
fr[76]=['AcctAttributeGroup', 'acctattributegroup.html'];
fr[77]=['Acct', 'acct.html'];
fr[78]=['AddAmountAttributeGroup', 'addamountattributegroup.html'];
fr[79]=['AddAmount1', 'addamount1.html'];
fr[80]=['AddAmount2', 'addamount2.html'];
fr[81]=['AddAmount3', 'addamount3.html'];
fr[82]=['AddAmount4', 'addamount4.html'];
fr[83]=['BabyChildAttributeGroup', 'babychildattributegroup.html'];
fr[84]=['Baby', 'baby.html'];
fr[85]=['Child', 'child.html'];
fr[86]=['BuyAttributeGroup', 'buyattributegroup.html'];
fr[87]=['BuyAcct', 'buyacct.html'];
fr[88]=['BuyAmtBaseCurr', 'buyamtbasecurr.html'];
fr[89]=['BuyCurr', 'buycurr.html'];
fr[90]=['BuyExchgRate', 'buyexchgrate.html'];
fr[91]=['BuyGross', 'buygross.html'];
fr[92]=['BuyNet', 'buynet.html'];
fr[93]=['ChildIdxNrAttributeGroup', 'childidxnrattributegroup.html'];
fr[94]=['ChildIdxNr', 'childidxnr.html'];
fr[95]=['DateFromToAttributeGroup', 'datefromtoattributegroup.html'];
fr[96]=['DateFrom', 'datefrom.html'];
fr[97]=['DateTo', 'dateto.html'];
fr[98]=['DateRelevantAttributeGroup', 'daterelevantattributegroup.html'];
fr[99]=['EndDateRelevant', 'enddaterelevant.html'];
fr[100]=['StartDateRelevant', 'startdaterelevant.html'];
fr[101]=['DayAttributeGroup', 'dayattributegroup.html'];
fr[102]=['Day', 'day.html'];
fr[103]=['DaysDateBeforeDepartureAttributeGroup', 'daysdatebeforedepartureattributegroup.html'];
fr[104]=['DateBeforeDepartureFrom', 'datebeforedeparturefrom.html'];
fr[105]=['DateBeforeDepartureTo', 'datebeforedepartureto.html'];
fr[106]=['DaysBeforeDepartureFrom', 'daysbeforedeparturefrom.html'];
fr[107]=['DaysBeforeDepartureTo', 'daysbeforedepartureto.html'];
fr[108]=['DescIdAttributeGroup', 'descidattributegroup.html'];
fr[109]=['DescId', 'descid.html'];
fr[110]=['SellGeneralAttributeGroup', 'sellgeneralattributegroup.html'];
fr[111]=['AgeFrom', 'agefrom.html'];
fr[112]=['AgeTo', 'ageto.html'];
fr[113]=['NotSpecialRelevant', 'notspecialrelevant.html'];
fr[114]=['P1', 'p1.html'];
fr[115]=['P2', 'p2.html'];
fr[116]=['P3', 'p3.html'];
fr[117]=['P4', 'p4.html'];
fr[118]=['Type', 'type1.html'];
fr[119]=['SpecialCommissionAttributeGroup', 'specialcommissionattributegroup.html'];
fr[120]=['SpecialCommission', 'specialcommission.html'];
fr[121]=['SpecialCommissionFlag', 'specialcommissionflag.html'];
fr[122]=['WeekdaysValidAttributeGroup', 'weekdaysvalidattributegroup.html'];
fr[123]=['WeekdaysValid', 'weekdaysvalid.html'];
fr[124]=['AddPerDayPriceAttributes', 'addperdaypriceattributes.html'];
fr[125]=['AddPerDayPricesChildren', 'addperdaypriceschildren.html'];
fr[126]=['AddPerDayPrice', 'addperdayprice.html'];
fr[127]=['Desc', 'desc.html'];
fr[128]=['Desc', 'desc1.html'];
fr[129]=['DestinationAttributes', 'destinationattributes.html'];
fr[130]=['Code', 'code1.html'];
fr[131]=['CountryCode', 'countrycode.html'];
fr[132]=['EarlyBookingAttributes', 'earlybookingattributes.html'];
fr[133]=['ForAllDays', 'foralldays.html'];
fr[134]=['ForceDisplay', 'forcedisplay.html'];
fr[135]=['FromDay', 'fromday.html'];
fr[136]=['MaxNrNights', 'maxnrnights.html'];
fr[137]=['Percent', 'percent.html'];
fr[138]=['SpecialCommission', 'specialcommission1.html'];
fr[139]=['ToDay', 'today.html'];
fr[140]=['EarlyBookingsChildren', 'earlybookingschildren.html'];
fr[141]=['EarlyBooking', 'earlybooking.html'];
fr[142]=['ItemInfoRequestAttributes', 'iteminforequestattributes.html'];
fr[143]=['Day', 'day1.html'];
fr[144]=['FreeSellRelease', 'freesellrelease.html'];
fr[145]=['FS', 'fs.html'];
fr[146]=['RQ', 'rq.html'];
fr[147]=['ItemInfos', 'iteminfos1.html'];
fr[148]=['ItemInfoRequests', 'iteminforequests.html'];
fr[149]=['ItemInfoRequest', 'iteminforequest.html'];
fr[150]=['ItemInfoTexts', 'iteminfotexts.html'];
fr[151]=['ItemInfoText', 'iteminfotext.html'];
fr[152]=['ItemInfoText', 'iteminfotext1.html'];
fr[153]=['BeginDate', 'begindate.html'];
fr[154]=['EndDate', 'enddate.html'];
fr[155]=['External', 'external.html'];
fr[156]=['Invoice', 'invoice.html'];
fr[157]=['Itinerary', 'itinerary.html'];
fr[158]=['Text', 'text.html'];
fr[159]=['Title', 'title1.html'];
fr[160]=['de', 'de.html'];
fr[161]=['en', 'en.html'];
fr[162]=['fr', 'fr1.html'];
fr[163]=['it', 'it.html'];
fr[164]=['OneTimeAttributes', 'onetimeattributes.html'];
fr[165]=['OneTimesChildren', 'onetimeschildren.html'];
fr[166]=['OneTime', 'onetime.html'];
fr[167]=['PerDayPriceAttributes', 'perdaypriceattributes.html'];
fr[168]=['MaxNrNights', 'maxnrnights1.html'];
fr[169]=['PerDayPricesChildren', 'perdaypriceschildren.html'];
fr[170]=['PerDayPrice', 'perdayprice.html'];
fr[171]=['PhoneAttributes', 'phoneattributes.html'];
fr[172]=['AreaCode', 'areacode.html'];
fr[173]=['CountryPrefix', 'countryprefix.html'];
fr[174]=['Number', 'number.html'];
fr[175]=['SpecialOfferAttributes', 'specialofferattributes.html'];
fr[176]=['ChildAdultNr', 'childadultnr.html'];
fr[177]=['ChildChildNr', 'childchildnr.html'];
fr[178]=['FromDayBase', 'fromdaybase.html'];
fr[179]=['LastSpOffEndDate', 'lastspoffenddate.html'];
fr[180]=['PayNights', 'paynights.html'];
fr[181]=['RuleType', 'ruletype.html'];
fr[182]=['SaveDayType', 'savedaytype.html'];
fr[183]=['SaveNights', 'savenights.html'];
fr[184]=['SpecialCommission', 'specialcommission2.html'];
fr[185]=['ToDayBase', 'todaybase.html'];
fr[186]=['Type', 'type2.html'];
fr[187]=['SpecialOffersChildren', 'specialofferschildren.html'];
fr[188]=['SpecialOffer', 'specialoffer.html'];
fr[189]=['Translation', 'translation.html'];
fr[190]=['de', 'de1.html'];
fr[191]=['en', 'en1.html'];
fr[192]=['fr', 'fr2.html'];
fr[193]=['it', 'it1.html'];
fr[194]=['InternalPriceType.xsd', 'internalpricetype_xsd.html'];
fr[195]=['InternalPriceType', 'internalpricetype.html'];
fr[196]=['PackageItemDescription.xsd', 'packageitemdescription_xsd.html'];
fr[197]=['PackageItemDescription', 'packageitemdescription.html'];
fr[198]=['DepartureText', 'departuretext.html'];
fr[199]=['InvoiceText', 'invoicetext.html'];
fr[200]=['ItineraryText', 'itinerarytext.html'];
fr[201]=['PriceTravellerType.xsd', 'pricetravellertype_xsd.html'];
fr[202]=['PriceTravellerType', 'pricetravellertype.html'];
fr[203]=['CustomerNr', 'customernr.html'];
fr[204]=['TravellerId', 'travellerid.html'];
fr[205]=['TravellerSeq', 'travellerseq.html'];
fr[206]=['ProjectType.xsd', 'projecttype_xsd.html'];
fr[207]=['ProjectType', 'projecttype.html'];
fr[208]=['System', 'system1.html'];
fr[209]=['Project', 'project.html'];
fr[210]=['Code', 'code2.html'];
fr[211]=['Description', 'description.html'];
fr[212]=['ExtCostManagement', 'extcostmanagement.html'];
fr[213]=['Percentage', 'percentage.html'];
fr[214]=['Seq', 'seq.html'];
fr[215]=['SupplierType.xsd', 'suppliertype_xsd.html'];
fr[216]=['SupplierType', 'suppliertype.html'];
fr[217]=['AirlineNr', 'airlinenr.html'];
fr[218]=['ApiCode', 'apicode.html'];
fr[219]=['Broker', 'broker.html'];
fr[220]=['Code', 'code3.html'];
fr[221]=['PayableTo', 'payableto.html'];
fr[222]=['Seq', 'seq1.html'];
fr[223]=['Service', 'service.html'];
fr[224]=['TravelDate.xsd', 'traveldate_xsd.html'];
fr[225]=['TravelDate', 'traveldate1.html'];
fr[226]=['ExcludeTravelDate', 'excludetraveldate.html'];
fr[227]=['Friday', 'friday.html'];
fr[228]=['Monday', 'monday.html'];
fr[229]=['Saturday', 'saturday.html'];
fr[230]=['Sunday', 'sunday.html'];
fr[231]=['Thursday', 'thursday.html'];
fr[232]=['TravelBeginDate', 'travelbegindate.html'];
fr[233]=['TravelEndDate', 'travelenddate.html'];
fr[234]=['Tuesday', 'tuesday.html'];
fr[235]=['Wednesday', 'wednesday.html'];
fr[236]=['Bus.xsd', 'bus_xsd.html'];
fr[237]=['Bus', 'bus.html'];
fr[238]=['Address1', 'address1.html'];
fr[239]=['Address2', 'address2.html'];
fr[240]=['Arrival', 'arrival.html'];
fr[241]=['Code', 'code4.html'];
fr[242]=['Terminal', 'terminal.html'];
fr[243]=['Time', 'time.html'];
fr[244]=['BusCode', 'buscode.html'];
fr[245]=['BusNumber', 'busnumber.html'];
fr[246]=['City', 'city.html'];
fr[247]=['CompanyName', 'companyname.html'];
fr[248]=['ConfirmationNr', 'confirmationnr.html'];
fr[249]=['ConfirmedBy', 'confirmedby.html'];
fr[250]=['Departure', 'departure.html'];
fr[251]=['CheckInTime', 'checkintime.html'];
fr[252]=['Code', 'code5.html'];
fr[253]=['Terminal', 'terminal1.html'];
fr[254]=['Time', 'time1.html'];
fr[255]=['Documents', 'documents.html'];
fr[256]=['Fax', 'fax.html'];
fr[257]=['AreaCode', 'areacode1.html'];
fr[258]=['Number', 'number1.html'];
fr[259]=['Phone', 'phone.html'];
fr[260]=['AreaCode', 'areacode2.html'];
fr[261]=['Number', 'number2.html'];
fr[262]=['PostalCode', 'postalcode.html'];
fr[263]=['ProductItemPrices', 'productitemprices.html'];
fr[264]=['Remark', 'remark.html'];
fr[265]=['Seat', 'seat.html'];
fr[266]=['CancellationFee.xsd', 'cancellationfee_xsd.html'];
fr[267]=['CancellationFee', 'cancellationfee.html'];
fr[268]=['Amount', 'amount.html'];
fr[269]=['BeginDate', 'begindate1.html'];
fr[270]=['DayBevorDepartureBegin', 'daybevordeparturebegin.html'];
fr[271]=['DayBevorDepartureEnd', 'daybevordepartureend.html'];
fr[272]=['Descriptions', 'descriptions.html'];
fr[273]=['EndDate', 'enddate1.html'];
fr[274]=['NrDaysFeeApply', 'nrdaysfeeapply.html'];
fr[275]=['Percent', 'percent1.html'];
fr[276]=['PriceType', 'pricetype.html'];
fr[277]=['ProcessFee', 'processfee.html'];
fr[278]=['InternalPriceType', 'internalpricetype1.html'];
fr[279]=['Car.xsd', 'car_xsd.html'];
fr[280]=['Car', 'car.html'];
fr[281]=['Address1', 'address11.html'];
fr[282]=['Address2', 'address21.html'];
fr[283]=['CarCategories', 'carcategories.html'];
fr[284]=['CarCode', 'carcode.html'];
fr[285]=['Category', 'category.html'];
fr[286]=['City', 'city1.html'];
fr[287]=['Company', 'company.html'];
fr[288]=['ConfirmationNr', 'confirmationnr1.html'];
fr[289]=['Country', 'country1.html'];
fr[290]=['IsoCode', 'isocode2.html'];
fr[291]=['PhoneCountryCode', 'phonecountrycode.html'];
fr[292]=['DescriptionVoucher', 'descriptionvoucher.html'];
fr[293]=['Destination', 'destination1.html'];
fr[294]=['Dropoff', 'dropoff.html'];
fr[295]=['Description', 'description1.html'];
fr[296]=['Time', 'time2.html'];
fr[297]=['DropoffInfo', 'dropoffinfo.html'];
fr[298]=['Fax', 'fax1.html'];
fr[299]=['AreaCode', 'areacode3.html'];
fr[300]=['Number', 'number3.html'];
fr[301]=['Included', 'included.html'];
fr[302]=['Phone', 'phone1.html'];
fr[303]=['AreaCode', 'areacode4.html'];
fr[304]=['Number', 'number4.html'];
fr[305]=['Pickup', 'pickup.html'];
fr[306]=['Description', 'description2.html'];
fr[307]=['Info', 'info.html'];
fr[308]=['Time', 'time3.html'];
fr[309]=['PickupInfo', 'pickupinfo.html'];
fr[310]=['PostalCode', 'postalcode1.html'];
fr[311]=['PriceInfo', 'priceinfo1.html'];
fr[312]=['Region', 'region1.html'];
fr[313]=['Remark', 'remark1.html'];
fr[314]=['RemarkVoucher', 'remarkvoucher.html'];
fr[315]=['SubRegion', 'subregion1.html'];
fr[316]=['SupplierInfos', 'supplierinfos.html'];
fr[317]=['Type', 'type3.html'];
fr[318]=['CarCategory.xsd', 'carcategory_xsd.html'];
fr[319]=['CarCategory', 'carcategory.html'];
fr[320]=['Camper', 'camper.html'];
fr[321]=['Category', 'category1.html'];
fr[322]=['CRSCode', 'crscode.html'];
fr[323]=['Destination', 'destination2.html'];
fr[324]=['IncludedDescription', 'includeddescription.html'];
fr[325]=['Miscellaneous', 'miscellaneous.html'];
fr[326]=['PlanCode', 'plancode.html'];
fr[327]=['ProductItemPrices', 'productitemprices1.html'];
fr[328]=['Supplier', 'supplier1.html'];
fr[329]=['TourboCode', 'tourbocode.html'];
fr[330]=['TourboDescription', 'tourbodescription.html'];
fr[331]=['Type', 'type4.html'];
fr[332]=['Key', 'key1.html'];
fr[333]=['Description.xsd', 'description_xsd.html'];
fr[334]=['Description', 'description3.html'];
fr[335]=['Description', 'description4.html'];
fr[336]=['Language', 'language1.html'];
fr[337]=['Document.xsd', 'document_xsd.html'];
fr[338]=['Document', 'document.html'];
fr[339]=['Description', 'description5.html'];
fr[340]=['IsMailattachment', 'ismailattachment.html'];
fr[341]=['IsMailing', 'ismailing.html'];
fr[342]=['IsScan', 'isscan.html'];
fr[343]=['Name', 'name.html'];
fr[344]=['ShortDescription', 'shortdescription.html'];
fr[345]=['Template', 'template.html'];
fr[346]=['Type', 'type5.html'];
fr[347]=['Key', 'key2.html'];
fr[348]=['DossierItem.xsd', 'dossieritem_xsd.html'];
fr[349]=['DossierItem', 'dossieritem.html'];
fr[350]=['AllowProjectsEntry', 'allowprojectsentry.html'];
fr[351]=['BaseDataProductSeq', 'basedataproductseq.html'];
fr[352]=['Consolidate', 'consolidate.html'];
fr[353]=['DossierItemSeq', 'dossieritemseq.html'];
fr[354]=['Position', 'position.html'];
fr[355]=['Type', 'type6.html'];
fr[356]=['ViewOnly', 'viewonly.html'];
fr[357]=['Package', 'package.html'];
fr[358]=['Country', 'country2.html'];
fr[359]=['IsoCode', 'isocode3.html'];
fr[360]=['PhoneCountryCode', 'phonecountrycode1.html'];
fr[361]=['Destination', 'destination3.html'];
fr[362]=['Detail', 'detail.html'];
fr[363]=['Documents', 'documents1.html'];
fr[364]=['FareType', 'faretype.html'];
fr[365]=['FixDate', 'fixdate.html'];
fr[366]=['FrequentFlyer', 'frequentflyer.html'];
fr[367]=['MaximumTotalStay', 'maximumtotalstay1.html'];
fr[368]=['MinimumHotelStay', 'minimumhotelstay1.html'];
fr[369]=['MinimumPrice', 'minimumprice.html'];
fr[370]=['MinimumTotalStay', 'minimumtotalstay1.html'];
fr[371]=['NumberOfPersons', 'numberofpersons.html'];
fr[372]=['OfferEndDate', 'offerenddate.html'];
fr[373]=['OfferIsSoldOut', 'offerissoldout.html'];
fr[374]=['OfferStartDate', 'offerstartdate.html'];
fr[375]=['OfficialPrice', 'officialprice.html'];
fr[376]=['PackageCode', 'packagecode.html'];
fr[377]=['PackageItems', 'packageitems.html'];
fr[378]=['PackageOfferDescription', 'packageofferdescription.html'];
fr[379]=['Language', 'language2.html'];
fr[380]=['PassiveDate', 'passivedate.html'];
fr[381]=['PCC', 'pcc.html'];
fr[382]=['Region', 'region2.html'];
fr[383]=['Remark', 'remark2.html'];
fr[384]=['Service', 'service1.html'];
fr[385]=['ShortOffer', 'shortoffer.html'];
fr[386]=['SubRegion', 'subregion2.html'];
fr[387]=['TicketAirline', 'ticketairline.html'];
fr[388]=['TicketGroupSegmentString', 'ticketgroupsegmentstring.html'];
fr[389]=['Title', 'title2.html'];
fr[390]=['TravelDates', 'traveldates1.html'];
fr[391]=['VendorLocator', 'vendorlocator.html'];
fr[392]=['PackageType', 'packagetype.html'];
fr[393]=['AddInfos', 'addinfos.html'];
fr[394]=['AddInfo', 'addinfo.html'];
fr[395]=['Amount', 'amount1.html'];
fr[396]=['Date', 'date.html'];
fr[397]=['Desc', 'desc2.html'];
fr[398]=['IsManual', 'ismanual.html'];
fr[399]=['Nr', 'nr1.html'];
fr[400]=['Tag', 'tag.html'];
fr[401]=['Type', 'type7.html'];
fr[402]=['ApiBookingNr', 'apibookingnr.html'];
fr[403]=['ApiClient', 'apiclient.html'];
fr[404]=['ApiSubSystem', 'apisubsystem.html'];
fr[405]=['BeginDate', 'begindate2.html'];
fr[406]=['BeginDay', 'beginday.html'];
fr[407]=['BookingSupplier', 'bookingsupplier.html'];
fr[408]=['CancellationFees', 'cancellationfees.html'];
fr[409]=['CostCenter', 'costcenter1.html'];
fr[410]=['Duration', 'duration.html'];
fr[411]=['EndDate', 'enddate2.html'];
fr[412]=['EndDay', 'endday.html'];
fr[413]=['ExternalDossierNr', 'externaldossiernr.html'];
fr[414]=['ExternalItemNr', 'externalitemnr.html'];
fr[415]=['ExternalSource', 'externalsource.html'];
fr[416]=['ExternalSystemIds', 'externalsystemids.html'];
fr[417]=['ExternalSystemId', 'externalsystemid.html'];
fr[418]=['ExternalSystemIdCode', 'externalsystemidcode.html'];
fr[419]=['ExternalSystemIdTag', 'externalsystemidtag.html'];
fr[420]=['ExternalSystemIdType', 'externalsystemidtype.html'];
fr[421]=['GdsBookingNr', 'gdsbookingnr.html'];
fr[422]=['GdsSource', 'gdssource.html'];
fr[423]=['ItemInfos', 'iteminfos2.html'];
fr[424]=['ItemNotOnInvoice', 'itemnotoninvoice.html'];
fr[425]=['ItemPrices', 'itemprices.html'];
fr[426]=['LogicDataProductSeq', 'logicdataproductseq.html'];
fr[427]=['NumberOfItems', 'numberofitems.html'];
fr[428]=['Projects', 'projects.html'];
fr[429]=['PurchasePrices', 'purchaseprices.html'];
fr[430]=['ShortDescription1', 'shortdescription1.html'];
fr[431]=['ShortDescription2', 'shortdescription2.html'];
fr[432]=['SourceDossierSeq', 'sourcedossierseq.html'];
fr[433]=['Status', 'status.html'];
fr[434]=['Travellers', 'travellers.html'];
fr[435]=['Traveller', 'traveller.html'];
fr[436]=['CustomerNr', 'customernr1.html'];
fr[437]=['OpcPrice', 'opcprice.html'];
fr[438]=['Seat1', 'seat1.html'];
fr[439]=['Seat2', 'seat2.html'];
fr[440]=['Seat3', 'seat3.html'];
fr[441]=['Seat4', 'seat4.html'];
fr[442]=['Seat5', 'seat5.html'];
fr[443]=['TaxPrice', 'taxprice.html'];
fr[444]=['Ticket1', 'ticket1.html'];
fr[445]=['Ticket2', 'ticket2.html'];
fr[446]=['Ticket3', 'ticket3.html'];
fr[447]=['Ticket4', 'ticket4.html'];
fr[448]=['Ticket5', 'ticket5.html'];
fr[449]=['TicketingAirline', 'ticketingairline.html'];
fr[450]=['TicketIssueDate', 'ticketissuedate.html'];
fr[451]=['TicketPrice', 'ticketprice.html'];
fr[452]=['TravellerId', 'travellerid1.html'];
fr[453]=['TravellerSeq', 'travellerseq1.html'];
fr[454]=['Flight.xsd', 'flight_xsd.html'];
fr[455]=['Flight', 'flight.html'];
fr[456]=['Airlinecode', 'airlinecode.html'];
fr[457]=['AirplaneType', 'airplanetype.html'];
fr[458]=['Arrival', 'arrival1.html'];
fr[459]=['Code', 'code6.html'];
fr[460]=['DayIndicator', 'dayindicator.html'];
fr[461]=['Terminal', 'terminal2.html'];
fr[462]=['Time', 'time4.html'];
fr[463]=['Type', 'type8.html'];
fr[464]=['ArrivalDescription', 'arrivaldescription.html'];
fr[465]=['BaggageAllowance', 'baggageallowance.html'];
fr[466]=['BookingClass', 'bookingclass.html'];
fr[467]=['BookingDate', 'bookingdate.html'];
fr[468]=['BookingNr', 'bookingnr.html'];
fr[469]=['Class', 'class.html'];
fr[470]=['Departure', 'departure1.html'];
fr[471]=['CheckInOffset', 'checkinoffset.html'];
fr[472]=['CheckInTime', 'checkintime1.html'];
fr[473]=['Code', 'code7.html'];
fr[474]=['Terminal', 'terminal3.html'];
fr[475]=['Time', 'time5.html'];
fr[476]=['Type', 'type9.html'];
fr[477]=['DepartureDescription', 'departuredescription.html'];
fr[478]=['DomesticFlight', 'domesticflight.html'];
fr[479]=['FlightDirection', 'flightdirection.html'];
fr[480]=['FlightNumber', 'flightnumber.html'];
fr[481]=['FlightTime', 'flighttime.html'];
fr[482]=['LogicAirLineCode', 'logicairlinecode.html'];
fr[483]=['LogicClass', 'logicclass.html'];
fr[484]=['LogicClassDescription', 'logicclassdescription.html'];
fr[485]=['LogicDataProductSeq', 'logicdataproductseq1.html'];
fr[486]=['LogicFlightNr', 'logicflightnr.html'];
fr[487]=['LogicKey', 'logickey.html'];
fr[488]=['Longhaul', 'longhaul.html'];
fr[489]=['Meal', 'meal.html'];
fr[490]=['NewCheckIn', 'newcheckin.html'];
fr[491]=['OperatingCarrrierCode', 'operatingcarrriercode.html'];
fr[492]=['PackageItemDescription', 'packageitemdescription1.html'];
fr[493]=['PassportControl', 'passportcontrol.html'];
fr[494]=['ProductItemPrices', 'productitemprices2.html'];
fr[495]=['Remark', 'remark3.html'];
fr[496]=['SeatString', 'seatstring.html'];
fr[497]=['ViaFlight', 'viaflight.html'];
fr[498]=['Hotel.xsd', 'hotel_xsd.html'];
fr[499]=['Hotel', 'hotel.html'];
fr[500]=['AddHotelInfos', 'addhotelinfos.html'];
fr[501]=['AddHotelInfo', 'addhotelinfo.html'];
fr[502]=['Text', 'text1.html'];
fr[503]=['Type', 'type10.html'];
fr[504]=['Address1', 'address12.html'];
fr[505]=['Address2', 'address22.html'];
fr[506]=['Arrival', 'arrival2.html'];
fr[507]=['Description', 'description6.html'];
fr[508]=['Time', 'time6.html'];
fr[509]=['BillingSupplier', 'billingsupplier.html'];
fr[510]=['Category', 'category2.html'];
fr[511]=['City', 'city2.html'];
fr[512]=['ConfirmationNr', 'confirmationnr2.html'];
fr[513]=['ConfirmedBy', 'confirmedby1.html'];
fr[514]=['Country', 'country3.html'];
fr[515]=['IsoCode', 'isocode4.html'];
fr[516]=['PhoneCountryCode', 'phonecountrycode2.html'];
fr[517]=['Departure', 'departure2.html'];
fr[518]=['Description', 'description7.html'];
fr[519]=['Time', 'time7.html'];
fr[520]=['DescriptionVoucher', 'descriptionvoucher1.html'];
fr[521]=['Destination', 'destination4.html'];
fr[522]=['Email', 'email.html'];
fr[523]=['Fax', 'fax2.html'];
fr[524]=['AreaCode', 'areacode5.html'];
fr[525]=['Number', 'number5.html'];
fr[526]=['HotelChain', 'hotelchain.html'];
fr[527]=['HotelCode', 'hotelcode.html'];
fr[528]=['HotelImages', 'hotelimages.html'];
fr[529]=['Image', 'image.html'];
fr[530]=['Data', 'data.html'];
fr[531]=['Encoding', 'encoding.html'];
fr[532]=['Height', 'height.html'];
fr[533]=['Id', 'id.html'];
fr[534]=['Name', 'name1.html'];
fr[535]=['Size', 'size.html'];
fr[536]=['Type', 'type11.html'];
fr[537]=['Width', 'width.html'];
fr[538]=['HotelName', 'hotelname.html'];
fr[539]=['Included', 'included1.html'];
fr[540]=['InfoURL', 'infourl.html'];
fr[541]=['Latitude', 'latitude.html'];
fr[542]=['Location', 'location.html'];
fr[543]=['Longitude', 'longitude.html'];
fr[544]=['MealVoucher', 'mealvoucher.html'];
fr[545]=['Mobile', 'mobile.html'];
fr[546]=['AreaCode', 'areacode6.html'];
fr[547]=['Number', 'number6.html'];
fr[548]=['NrRooms', 'nrrooms.html'];
fr[549]=['Owner', 'owner.html'];
fr[550]=['PayableTo', 'payableto1.html'];
fr[551]=['Phone', 'phone2.html'];
fr[552]=['AreaCode', 'areacode7.html'];
fr[553]=['Number', 'number7.html'];
fr[554]=['PostalCode', 'postalcode2.html'];
fr[555]=['Region', 'region3.html'];
fr[556]=['Remark', 'remark4.html'];
fr[557]=['RoomDescription', 'roomdescription.html'];
fr[558]=['Rooms', 'rooms.html'];
fr[559]=['RoomType', 'roomtype.html'];
fr[560]=['RoomVoucher', 'roomvoucher.html'];
fr[561]=['SubRegion', 'subregion3.html'];
fr[562]=['VatNr', 'vatnr.html'];
fr[563]=['VoucherSupplier', 'vouchersupplier.html'];
fr[564]=['WebURL', 'weburl.html'];
fr[565]=['WishVoucher', 'wishvoucher.html'];
fr[566]=['ItemInfo.xsd', 'iteminfo_xsd.html'];
fr[567]=['ItemInfo', 'iteminfo.html'];
fr[568]=['BeginDate', 'begindate3.html'];
fr[569]=['EndDate', 'enddate3.html'];
fr[570]=['Text', 'text2.html'];
fr[571]=['Title', 'title3.html'];
fr[572]=['External', 'external1.html'];
fr[573]=['Invoice', 'invoice1.html'];
fr[574]=['Itinerary', 'itinerary1.html'];
fr[575]=['Seq', 'seq2.html'];
fr[576]=['Type', 'type12.html'];
fr[577]=['ItemPrice.xsd', 'itemprice_xsd.html'];
fr[578]=['ItemPrice', 'itemprice.html'];
fr[579]=['Adults', 'adults.html'];
fr[580]=['Children', 'children.html'];
fr[581]=['Currency', 'currency2.html'];
fr[582]=['DebiAccount', 'debiaccount.html'];
fr[583]=['DossierItemSourceSeq', 'dossieritemsourceseq.html'];
fr[584]=['ExtraPriceType', 'extrapricetype.html'];
fr[585]=['Infants', 'infants.html'];
fr[586]=['PriceCommissionGive', 'pricecommissiongive.html'];
fr[587]=['PriceDescription', 'pricedescription.html'];
fr[588]=['PricePerUnit', 'priceperunit.html'];
fr[589]=['PricePosition', 'priceposition.html'];
fr[590]=['PriceReferencePosition', 'pricereferenceposition.html'];
fr[591]=['PriceTravellers', 'pricetravellers.html'];
fr[592]=['PriceTraveller', 'pricetraveller.html'];
fr[593]=['PriceType', 'pricetype1.html'];
fr[594]=['Rate', 'rate.html'];
fr[595]=['SpecialCommission', 'specialcommission3.html'];
fr[596]=['SupplierSeq', 'supplierseq.html'];
fr[597]=['TotalPrice', 'totalprice.html'];
fr[598]=['UnitNr', 'unitnr.html'];
fr[599]=['VatCode', 'vatcode.html'];
fr[600]=['VatDescription', 'vatdescription.html'];
fr[601]=['VatInternalCode', 'vatinternalcode.html'];
fr[602]=['VatPercent', 'vatpercent.html'];
fr[603]=['VatPrintedCode', 'vatprintedcode.html'];
fr[604]=['VATSplits', 'vatsplits.html'];
fr[605]=['VATSplit', 'vatsplit.html'];
fr[606]=['Amount', 'amount2.html'];
fr[607]=['VatSplittCode', 'vatsplittcode.html'];
fr[608]=['VatSplittPercent', 'vatsplittpercent.html'];
fr[609]=['VatSplittPrintedCode', 'vatsplittprintedcode.html'];
fr[610]=['WorkFlowCode', 'workflowcode.html'];
fr[611]=['BaseDataProductSeq', 'basedataproductseq1.html'];
fr[612]=['InternalPriceSubType', 'internalpricesubtype.html'];
fr[613]=['InternalPriceType', 'internalpricetype2.html'];
fr[614]=['PriceType', 'pricetype2.html'];
fr[615]=['Meal.xsd', 'meal_xsd.html'];
fr[616]=['Meal', 'meal1.html'];
fr[617]=['MealDescription', 'mealdescription.html'];
fr[618]=['MealType', 'mealtype.html'];
fr[619]=['Miscellaneous.xsd', 'miscellaneous_xsd.html'];
fr[620]=['Miscellaneous', 'miscellaneous1.html'];
fr[621]=['Arrival', 'arrival3.html'];
fr[622]=['Description', 'description8.html'];
fr[623]=['Time', 'time8.html'];
fr[624]=['BillingSupplier', 'billingsupplier1.html'];
fr[625]=['Commission', 'commission1.html'];
fr[626]=['ConfirmationNr', 'confirmationnr3.html'];
fr[627]=['ConfirmedBy', 'confirmedby2.html'];
fr[628]=['Country', 'country4.html'];
fr[629]=['IsoCode', 'isocode5.html'];
fr[630]=['PhoneCountryCode', 'phonecountrycode3.html'];
fr[631]=['Departure', 'departure3.html'];
fr[632]=['Description', 'description9.html'];
fr[633]=['Time', 'time9.html'];
fr[634]=['Destination', 'destination5.html'];
fr[635]=['Detail', 'detail1.html'];
fr[636]=['FlightNumber', 'flightnumber1.html'];
fr[637]=['ConfirmedBy', 'confirmedby3.html'];
fr[638]=['ItineraryDetail', 'itinerarydetail.html'];
fr[639]=['ItineraryTitle', 'itinerarytitle.html'];
fr[640]=['MaximumDays', 'maximumdays.html'];
fr[641]=['MaximumPersons', 'maximumpersons.html'];
fr[642]=['MinimumDays', 'minimumdays.html'];
fr[643]=['MinimumPersons', 'minimumpersons.html'];
fr[644]=['MiscCode', 'misccode.html'];
fr[645]=['MiscImages', 'miscimages.html'];
fr[646]=['Image', 'image1.html'];
fr[647]=['Data', 'data1.html'];
fr[648]=['Encoding', 'encoding1.html'];
fr[649]=['Height', 'height1.html'];
fr[650]=['Id', 'id1.html'];
fr[651]=['Name', 'name2.html'];
fr[652]=['Size', 'size1.html'];
fr[653]=['Type', 'type13.html'];
fr[654]=['Width', 'width1.html'];
fr[655]=['ProductItemPrices', 'productitemprices3.html'];
fr[656]=['Region', 'region4.html'];
fr[657]=['SubRegion', 'subregion4.html'];
fr[658]=['SupplierInfo', 'supplierinfo.html'];
fr[659]=['Title', 'title4.html'];
fr[660]=['VoucherDetail', 'voucherdetail.html'];
fr[661]=['VoucherSupplier', 'vouchersupplier1.html'];
fr[662]=['VoucherTitle', 'vouchertitle.html'];
fr[663]=['Language', 'language3.html'];
fr[664]=['ProductItemPrice.xsd', 'productitemprice_xsd.html'];
fr[665]=['ProductItemPrice', 'productitemprice.html'];
fr[666]=['AdditionalNight', 'additionalnight.html'];
fr[667]=['BeginDateRelevant', 'begindaterelevant.html'];
fr[668]=['BookFriday', 'bookfriday.html'];
fr[669]=['BookMonday', 'bookmonday.html'];
fr[670]=['BookSaturday', 'booksaturday.html'];
fr[671]=['BookSunday', 'booksunday.html'];
fr[672]=['BookThursday', 'bookthursday.html'];
fr[673]=['BookTuesday', 'booktuesday.html'];
fr[674]=['BookWednesday', 'bookwednesday.html'];
fr[675]=['Bus', 'bus1.html'];
fr[676]=['ArrivalTerminal', 'arrivalterminal.html'];
fr[677]=['ArrivalTerminalKey', 'arrivalterminalkey.html'];
fr[678]=['ArrivalTerminalName', 'arrivalterminalname.html'];
fr[679]=['DepartureTerminal', 'departureterminal.html'];
fr[680]=['DepartureTerminalKey', 'departureterminalkey.html'];
fr[681]=['DepartureTerminalName', 'departureterminalname.html'];
fr[682]=['OneWay', 'oneway.html'];
fr[683]=['Retour', 'retour.html'];
fr[684]=['ChargePerNight', 'chargepernight.html'];
fr[685]=['Children', 'children1.html'];
fr[686]=['Baby', 'baby1.html'];
fr[687]=['Child', 'child1.html'];
fr[688]=['ChildAgeFrom', 'childagefrom.html'];
fr[689]=['ChildAgeTo', 'childageto.html'];
fr[690]=['ExtraChildRoom', 'extrachildroom.html'];
fr[691]=['NumberAdults', 'numberadults.html'];
fr[692]=['NumberChilds', 'numberchilds.html'];
fr[693]=['SpecialChildPrice', 'specialchildprice.html'];
fr[694]=['Descriptions', 'descriptions1.html'];
fr[695]=['EarlyBooking', 'earlybooking1.html'];
fr[696]=['BookingBeginDate', 'bookingbegindate.html'];
fr[697]=['BookingEndDate', 'bookingenddate.html'];
fr[698]=['DaysFromBookingDate', 'daysfrombookingdate.html'];
fr[699]=['DaysToBookingDate', 'daystobookingdate.html'];
fr[700]=['FromDay', 'fromday1.html'];
fr[701]=['Percentage', 'percentage1.html'];
fr[702]=['TillDay', 'tillday.html'];
fr[703]=['EndDateRelevant', 'enddaterelevant1.html'];
fr[704]=['Flight', 'flight1.html'];
fr[705]=['AirLine', 'airline.html'];
fr[706]=['FlightClass', 'flightclass.html'];
fr[707]=['InboundFlight', 'inboundflight.html'];
fr[708]=['OutboundFlight', 'outboundflight.html'];
fr[709]=['PricePerWay', 'priceperway.html'];
fr[710]=['Via', 'via.html'];
fr[711]=['FlightOnlyArrangement', 'flightonlyarrangement.html'];
fr[712]=['AlwaysSpecialPrice', 'alwaysspecialprice.html'];
fr[713]=['PriceAvailableTill', 'priceavailabletill.html'];
fr[714]=['SpecialPrice', 'specialprice.html'];
fr[715]=['More', 'more.html'];
fr[716]=['CommisionMore', 'commisionmore.html'];
fr[717]=['PerDay', 'perday.html'];
fr[718]=['PerWeek', 'perweek.html'];
fr[719]=['SeasonChange', 'seasonchange.html'];
fr[720]=['SecondWeek', 'secondweek.html'];
fr[721]=['SpecialCommisionMore', 'specialcommisionmore.html'];
fr[722]=['Supplier', 'supplier2.html'];
fr[723]=['NoDiscount', 'nodiscount.html'];
fr[724]=['NumberOfNights', 'numberofnights.html'];
fr[725]=['NumerOfPersons', 'numerofpersons.html'];
fr[726]=['OneTimeCharge', 'onetimecharge.html'];
fr[727]=['PackagePrice', 'packageprice.html'];
fr[728]=['PriceBegin', 'pricebegin.html'];
fr[729]=['PriceEnd', 'priceend.html'];
fr[730]=['PricePerPerson', 'priceperperson.html'];
fr[731]=['PricePerRoom', 'priceperroom.html'];
fr[732]=['Rail', 'rail.html'];
fr[733]=['RailClass', 'railclass.html'];
fr[734]=['TrainCardType', 'traincardtype.html'];
fr[735]=['SpecialOffer', 'specialoffer1.html'];
fr[736]=['Cumulativ', 'cumulativ.html'];
fr[737]=['PayNights', 'paynights1.html'];
fr[738]=['SavingDays', 'savingdays.html'];
fr[739]=['StandardCalculationRule', 'standardcalculationrule.html'];
fr[740]=['TotalPriceNetto', 'totalpricenetto.html'];
fr[741]=['UnitPrice', 'unitprice.html'];
fr[742]=['PriceSequence', 'pricesequence.html'];
fr[743]=['PurchasePrice.xsd', 'purchaseprice_xsd.html'];
fr[744]=['PurchasePrice', 'purchaseprice.html'];
fr[745]=['AirlineNr', 'airlinenr1.html'];
fr[746]=['CrediAccount', 'crediaccount.html'];
fr[747]=['Currency', 'currency3.html'];
fr[748]=['ExternalItemNr', 'externalitemnr1.html'];
fr[749]=['InvoiceDate', 'invoicedate.html'];
fr[750]=['InvoiceNr', 'invoicenr.html'];
fr[751]=['PriceDescription', 'pricedescription1.html'];
fr[752]=['PricePerUnit', 'priceperunit1.html'];
fr[753]=['PricePosition', 'priceposition1.html'];
fr[754]=['PriceType', 'pricetype3.html'];
fr[755]=['Rate', 'rate1.html'];
fr[756]=['Supplier', 'supplier3.html'];
fr[757]=['TotalPrice', 'totalprice1.html'];
fr[758]=['UnitNr', 'unitnr1.html'];
fr[759]=['VatCode', 'vatcode1.html'];
fr[760]=['VatDescription', 'vatdescription1.html'];
fr[761]=['VatInternalCode', 'vatinternalcode1.html'];
fr[762]=['VatPercent', 'vatpercent1.html'];
fr[763]=['VatPrintedCode', 'vatprintedcode1.html'];
fr[764]=['InternalPriceType', 'internalpricetype3.html'];
fr[765]=['Room.xsd', 'room_xsd.html'];
fr[766]=['Room', 'room.html'];
fr[767]=['APIHotelCode', 'apihotelcode.html'];
fr[768]=['APIRoomCode', 'apiroomcode.html'];
fr[769]=['BookingCode', 'bookingcode.html'];
fr[770]=['Condingent', 'condingent.html'];
fr[771]=['Description', 'description10.html'];
fr[772]=['ExtraBedAdults', 'extrabedadults1.html'];
fr[773]=['ExtraBedChildren', 'extrabedchildren1.html'];
fr[774]=['MaxAdults', 'maxadults.html'];
fr[775]=['MaximalOccupancy', 'maximaloccupancy.html'];
fr[776]=['MealDescription', 'mealdescription1.html'];
fr[777]=['Meals', 'meals.html'];
fr[778]=['MinimalOccupancy', 'minimaloccupancy.html'];
fr[779]=['NormalOccupancy', 'normaloccupancy1.html'];
fr[780]=['PasiveDate', 'pasivedate.html'];
fr[781]=['PaySupplier', 'paysupplier.html'];
fr[782]=['ProductItemPrices', 'productitemprices4.html'];
fr[783]=['RoomType', 'roomtype1.html'];
fr[784]=['Supplier', 'supplier4.html'];
fr[785]=['TourboCode', 'tourbocode1.html'];
fr[786]=['VoucherSupplier', 'vouchersupplier2.html'];
fr[787]=['Key', 'key3.html'];
fr[788]=['Ship.xsd', 'ship_xsd.html'];
fr[789]=['Ship', 'ship.html'];
fr[790]=['Address1', 'address13.html'];
fr[791]=['Address2', 'address23.html'];
fr[792]=['Arrival', 'arrival4.html'];
fr[793]=['Code', 'code8.html'];
fr[794]=['Harbor', 'harbor.html'];
fr[795]=['Time', 'time10.html'];
fr[796]=['City', 'city3.html'];
fr[797]=['CompanyName', 'companyname1.html'];
fr[798]=['ConfirmationNr', 'confirmationnr4.html'];
fr[799]=['Departure', 'departure4.html'];
fr[800]=['CheckInTime', 'checkintime2.html'];
fr[801]=['Code', 'code9.html'];
fr[802]=['Harbor', 'harbor1.html'];
fr[803]=['Time', 'time11.html'];
fr[804]=['Fax', 'fax3.html'];
fr[805]=['AreaCode', 'areacode8.html'];
fr[806]=['Number', 'number8.html'];
fr[807]=['MealCode', 'mealcode.html'];
fr[808]=['Phone', 'phone3.html'];
fr[809]=['AreaCode', 'areacode9.html'];
fr[810]=['Number', 'number9.html'];
fr[811]=['PostalCode', 'postalcode3.html'];
fr[812]=['ProductItemPrices', 'productitemprices5.html'];
fr[813]=['Remark', 'remark5.html'];
fr[814]=['Seat', 'seat6.html'];
fr[815]=['ShipCode', 'shipcode.html'];
fr[816]=['ShipNumber', 'shipnumber.html'];
fr[817]=['Text.xsd', 'text_xsd.html'];
fr[818]=['Text', 'text3.html'];
fr[819]=['Insurance', 'insurance.html'];
fr[820]=['Detail', 'detail2.html'];
fr[821]=['InsuranceNr', 'insurancenr.html'];
fr[822]=['InternalInsuranceCode', 'internalinsurancecode.html'];
fr[823]=['InternalType', 'internaltype.html'];
fr[824]=['Code', 'code10.html'];
fr[825]=['Description', 'description11.html'];
fr[826]=['IsBeginText', 'isbegintext.html'];
fr[827]=['IsEndText', 'isendtext.html'];
fr[828]=['IsInvoiceText', 'isinvoicetext.html'];
fr[829]=['IsItineraryText', 'isitinerarytext.html'];
fr[830]=['IsNoCostCenter', 'isnocostcenter.html'];
fr[831]=['Title', 'title5.html'];
fr[832]=['Train.xsd', 'train_xsd.html'];
fr[833]=['Train', 'train.html'];
fr[834]=['Address1', 'address14.html'];
fr[835]=['Address2', 'address24.html'];
fr[836]=['Arrival', 'arrival5.html'];
fr[837]=['Code', 'code11.html'];
fr[838]=['Terminal', 'terminal4.html'];
fr[839]=['Time', 'time12.html'];
fr[840]=['City', 'city4.html'];
fr[841]=['Class', 'class1.html'];
fr[842]=['CompanyName', 'companyname2.html'];
fr[843]=['ConfirmationNr', 'confirmationnr5.html'];
fr[844]=['Departure', 'departure5.html'];
fr[845]=['CheckInTime', 'checkintime3.html'];
fr[846]=['Code', 'code12.html'];
fr[847]=['Terminal', 'terminal5.html'];
fr[848]=['Time', 'time13.html'];
fr[849]=['Fax', 'fax4.html'];
fr[850]=['AreaCode', 'areacode10.html'];
fr[851]=['Number', 'number10.html'];
fr[852]=['PackageItemDescription', 'packageitemdescription2.html'];
fr[853]=['Phone', 'phone4.html'];
fr[854]=['AreaCode', 'areacode11.html'];
fr[855]=['Number', 'number11.html'];
fr[856]=['PostalCode', 'postalcode4.html'];
fr[857]=['ProductItemPrices', 'productitemprices6.html'];
fr[858]=['Remark', 'remark6.html'];
fr[859]=['Seat', 'seat7.html'];
fr[860]=['TrainCode', 'traincode.html'];
fr[861]=['TrainNumber', 'trainnumber.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['--created',[1,75,206,215,266,279,318,348,454,498,566,577,619,664,743,765]],
['with',[1,75,119,120,132,134,175,178,185,194,196,201,206,215,224,236,266,267,277,279,318,333,337,348,349,350,454,455,487,497,498,499,506,517,557,566,577,615,619,620,658,664,743,765,788,817,832]],
['liquid',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['designer',[1,75,194,196,201,206,215,224,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,832]],
['edition',[1,75,194,196,201,206,215,224,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,832]],
['http',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['liquid-technologies',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['schema',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['elementformdefault',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['qualified',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['xmlns',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['xmlschema',[1,75,194,196,201,206,215,224,236,266,279,318,333,337,348,454,498,566,577,615,619,664,743,765,788,817,832]],
['include',[1,236,266,279,318,348,454,498,577,619,664,743,765,788,832]],
['schemalocation',[1,236,266,279,318,348,454,498,577,619,664,743,765,788,832]],
['\basedataimport',[1]],
['\common\items\dossieritem',[1]],
['element',[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,27,28,29,30,31,32,33,35,36,37,39,40,41,44,45,46,47,48,49,50,51,52,55,56,57,58,59,75,125,126,127,128,140,141,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,165,166,169,170,187,188,189,190,191,192,193,196,197,198,199,200,206,207,209,224,225,236,237,238,239,240,244,245,246,247,248,250,255,256,259,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,279,280,281,282,283,284,285,286,287,288,289,292,293,294,297,298,301,302,305,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,333,334,337,338,339,340,341,342,343,344,345,346,348,349,357,358,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,380,381,382,383,384,385,386,387,388,389,390,391,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,454,455,456,457,458,464,465,466,467,468,469,470,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,509,510,511,512,514,517,520,521,522,523,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,548,549,550,551,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,615,616,617,618,619,620,621,624,625,626,628,631,634,635,636,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,664,665,666,667,668,669,670,671,672,673,674,675,676,679,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,788,789,790,791,792,796,797,798,799,804,807,808,811,812,813,814,815,816,817,818,820,821,822,823,826,827,828,829,830,831,832,833,834,835,836,840,841,842,843,844,849,852,853,856,857,858,859,860,861]],
['name',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861]],
['arrangements',[1,2]],
['complextype',[1,2,3,5,12,23,33,37,40,41,52,58,59,75,124,125,127,128,129,132,140,142,147,148,150,152,159,164,165,167,169,171,175,187,189,196,197,201,202,206,207,209,215,216,224,225,236,237,240,248,250,255,256,259,263,266,267,272,279,280,283,289,294,298,302,305,318,319,327,333,334,337,338,348,349,357,358,363,377,378,390,393,394,408,416,417,423,425,429,434,435,454,455,458,470,494,498,499,500,501,506,512,514,517,523,528,529,545,551,558,566,567,577,578,591,604,605,615,616,619,620,621,626,628,631,636,645,646,655,664,665,675,676,679,685,694,695,704,711,715,732,735,743,744,765,766,777,782,788,789,792,799,804,808,812,817,818,823,832,833,836,844,849,853,857]],
['sequence',[1,2,3,5,37,40,58,75,125,127,140,147,148,150,165,169,187,189,196,197,206,207,215,216,222,236,237,255,263,266,267,272,279,280,283,318,319,327,348,349,357,363,377,378,390,393,408,416,423,425,429,434,454,455,494,498,499,500,528,558,566,567,575,577,578,591,604,605,619,620,645,655,664,665,675,685,694,695,704,711,715,732,735,765,766,777,782,788,789,812,817,818,832,833,857]],
['minoccurs',[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,27,28,29,30,31,32,33,35,36,37,39,40,45,46,47,48,49,50,51,52,55,56,57,58,75,125,126,127,128,140,141,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,165,166,169,170,187,188,189,190,191,192,193,196,197,198,199,200,236,237,238,239,240,244,245,246,247,248,250,255,256,259,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,279,280,281,282,283,284,285,286,287,288,289,292,293,294,297,298,301,302,305,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,329,330,331,337,338,339,340,341,342,343,344,345,346,348,349,357,358,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,380,381,382,383,384,385,386,387,388,389,390,391,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,419,421,422,423,424,425,426,427,428,429,430,431,432,433,434,454,455,456,457,458,464,465,466,467,468,469,470,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,503,504,505,506,509,510,511,512,514,517,520,521,522,523,526,527,528,529,532,533,534,535,537,538,539,540,541,542,543,544,545,548,549,550,551,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,577,578,579,580,581,582,583,584,585,586,587,589,590,591,593,594,595,596,599,600,601,602,603,604,605,608,609,610,615,616,617,618,619,620,621,624,625,626,628,631,634,635,636,638,639,640,641,642,643,644,645,646,649,650,651,652,654,655,656,657,658,659,660,661,662,664,665,666,667,668,669,670,671,672,673,674,675,676,679,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,741,743,744,745,746,747,748,749,750,751,753,754,755,756,759,760,761,762,763,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,788,789,790,791,792,796,797,798,799,804,807,808,811,812,813,814,815,816,817,818,820,821,822,823,826,827,828,829,830,831,832,833,834,835,836,840,841,842,843,844,849,853,856,857,858,859,860,861]],
['maxoccurs',[1,2,3,5,37,40,75,125,126,127,128,140,141,147,148,149,150,151,165,166,169,170,187,188,206,207,209,236,237,255,263,266,267,272,279,280,283,318,319,327,348,349,357,363,377,390,393,394,408,416,417,423,425,429,434,435,454,455,494,498,499,500,528,558,577,578,591,592,604,605,619,620,645,655,664,665,694,765,766,777,782,788,789,812,817,818,832,833,857]],
['unbounded',[1,2,3,5,39,44,45,46,47,48,75,125,126,127,128,140,141,147,148,149,150,151,165,166,169,170,187,188,236,237,255,263,266,267,272,279,280,283,318,319,327,348,349,357,363,377,390,393,394,408,416,417,423,425,429,434,435,454,455,494,498,499,500,528,558,577,578,591,592,604,605,619,620,645,655,664,665,694,765,766,777,782,788,789,812,832,833,857]],
['arrangement',[1,2,3,72]],
['title',[1,2,3,55,57,75,151,152,159,348,349,357,389,566,567,571,619,620,659,817,818,831]],
['type',[1,2,3,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,44,45,46,47,48,49,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,72,74,75,76,77,78,79,80,81,82,86,87,88,89,90,91,92,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,114,115,116,117,118,119,120,122,123,124,125,126,129,130,131,132,135,136,137,138,139,140,141,142,143,144,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,196,197,198,199,200,201,202,203,204,206,207,209,210,211,212,214,215,216,217,220,221,222,223,224,225,232,233,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,256,257,258,259,260,261,262,264,265,266,267,268,269,270,271,273,275,278,279,280,281,282,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,308,309,310,311,312,313,314,315,316,317,318,319,321,322,323,324,326,328,329,330,331,333,334,335,337,338,339,343,344,345,346,348,349,350,351,353,354,355,356,357,358,359,360,361,362,365,366,367,368,369,370,371,372,374,375,376,380,381,382,383,384,386,387,388,389,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,409,410,411,412,413,414,416,417,418,419,420,421,424,426,427,428,430,431,432,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,454,455,456,457,458,459,461,462,463,465,466,467,468,469,470,471,472,473,474,475,476,478,480,481,482,483,484,485,486,487,488,489,490,491,492,493,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,587,588,590,591,592,593,594,595,596,597,598,599,600,601,603,604,605,606,607,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,656,657,658,659,660,661,662,664,665,666,667,668,669,670,671,672,673,674,675,676,678,679,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,735,736,737,738,740,741,742,743,744,745,746,747,748,749,750,751,752,754,755,756,757,758,759,760,761,763,764,765,766,767,768,771,772,773,774,775,776,778,779,780,781,783,784,785,786,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,813,814,815,816,817,818,820,821,822,823,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,858,859,860,861]],
['string',[1,2,3,4,6,7,8,9,11,12,13,14,21,22,35,36,37,40,41,43,49,50,51,52,53,55,56,57,71,72,73,74,75,76,77,86,87,89,110,118,122,123,129,130,131,152,159,160,161,162,163,171,172,173,174,175,181,182,186,189,190,191,192,193,194,195,196,197,198,199,200,201,202,205,206,207,208,209,210,211,214,215,216,217,218,219,220,221,222,223,236,237,238,239,240,241,242,244,245,246,247,248,249,250,252,253,256,257,258,259,260,261,262,264,265,279,280,281,282,284,285,286,287,288,289,290,291,292,293,294,295,297,298,299,300,301,302,303,304,305,306,307,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,329,330,331,333,334,335,337,338,339,340,341,342,343,344,345,346,348,349,351,353,355,357,358,359,360,361,362,364,366,373,376,381,382,383,384,385,386,387,388,389,391,392,393,394,397,400,401,402,403,404,409,413,414,415,416,417,418,419,420,421,422,426,430,431,432,433,434,435,438,439,440,441,442,444,445,446,447,448,449,453,454,455,456,457,458,459,461,463,465,466,468,469,470,473,474,476,479,480,482,483,484,485,486,489,491,496,498,499,500,501,502,503,504,505,506,507,511,512,513,514,515,516,517,518,520,521,522,523,524,525,526,527,528,529,530,531,533,534,536,538,539,540,542,544,545,546,547,549,550,551,552,553,554,555,556,557,559,560,561,562,564,565,566,567,570,571,575,576,577,578,581,582,583,587,596,600,601,603,604,605,609,610,611,612,614,615,616,617,618,619,620,621,622,625,626,627,628,629,630,631,632,634,635,636,637,638,639,644,645,646,647,648,650,651,653,656,657,658,659,660,662,664,665,675,676,677,678,679,680,681,694,704,705,706,732,733,734,742,743,744,745,746,747,748,750,751,760,761,763,765,766,767,768,769,770,771,776,783,785,788,789,790,791,792,793,794,796,797,798,799,801,802,804,805,806,807,808,809,810,811,813,814,815,816,817,818,819,820,821,822,831,832,833,834,835,836,837,838,840,842,843,844,846,847,849,850,851,853,854,855,856,858,859,860,861]],
['annotation',[1,2,3,6,7,9,10,11,12,13,14,16,17,18,19,20,21,23,29,30,31,32,33,35,36,37,38,44,49,50,51,52,53,54,55,56,57,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,127,128,129,130,131,132,133,134,135,136,137,138,139,142,143,144,145,146,147,150,151,152,153,154,155,156,157,158,159,167,168,175,176,177,178,179,180,181,182,183,184,185,186,189,190,191,192,193,196,197,198,199,200,201,202,203,204,215,216,217,220,222,223,224,225,226,227,228,229,230,231,234,235,236,237,264,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,283,287,289,291,292,293,297,301,309,312,313,314,315,316,318,319,332,337,338,339,347,348,349,350,351,352,353,354,355,357,358,360,361,362,364,365,366,367,368,369,370,371,372,373,374,375,376,378,380,383,385,387,388,391,392,393,394,396,397,402,403,404,405,406,407,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,426,427,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,451,452,454,455,456,457,458,460,463,465,466,467,468,469,470,472,473,474,475,476,478,479,480,481,482,483,484,485,486,487,488,489,490,491,493,495,496,497,498,499,506,509,510,512,514,516,517,520,521,522,526,527,528,529,530,531,532,535,536,539,542,544,549,550,555,556,557,559,560,561,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,583,584,585,590,591,593,595,596,603,610,611,615,616,617,618,619,620,624,625,628,630,634,635,638,640,642,644,645,646,647,648,649,652,653,655,656,657,658,660,661,663,664,665,694,732,734,735,739,741,743,744,748,754,763,765,766,767,768,769,770,771,772,773,774,775,776,778,779,780,781,783,784,785,786,787,788,789,807,813,817,818,819,820,822,823,824,825,832,833,858]],
['documentation',[1,2,3,6,7,9,10,11,12,13,14,16,17,18,19,20,21,23,29,30,31,32,33,35,36,37,38,44,49,50,51,52,53,54,55,56,57,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,127,128,129,130,131,132,133,134,135,136,137,138,139,142,143,144,145,146,147,150,151,152,153,154,155,156,157,158,159,167,168,175,176,177,178,179,180,181,182,183,184,185,186,189,190,191,192,193,196,197,198,199,200,201,202,203,204,215,216,217,220,222,223,224,225,226,227,228,229,230,231,234,235,236,237,264,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,283,287,289,291,292,293,297,301,309,312,313,314,315,316,318,319,332,337,338,339,347,348,349,350,351,352,353,354,355,357,358,360,361,362,364,365,366,367,368,369,370,371,372,373,374,375,376,378,380,383,385,387,388,391,392,393,394,396,397,402,403,404,405,406,407,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,426,427,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,451,452,454,455,456,457,458,460,463,465,466,467,468,469,470,472,473,474,475,476,478,479,480,481,482,483,484,485,486,487,488,489,490,491,493,495,496,497,498,499,506,509,510,512,514,516,517,520,521,522,526,527,528,529,530,531,532,535,536,539,542,544,549,550,555,556,557,559,560,561,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,583,584,585,590,591,593,595,596,603,610,611,615,616,617,618,619,620,624,625,628,630,634,635,638,640,642,644,645,646,647,648,649,652,653,655,656,657,658,660,661,663,664,665,694,732,734,735,739,741,743,744,748,754,763,765,766,767,768,769,770,771,772,773,774,775,776,778,779,780,781,783,784,785,786,787,788,789,807,813,817,818,819,820,822,823,824,825,832,833,858]],
['online',[1,2,3,37,38,52,54,55,75,86,88,201,202,203,348,349,354,413,422,434,435,436,498,499,550,566,567,572]],
['internal',[1,2,3,11,55,75,93,94,119,121,132,138,175,184,348,349,351,409,426,454,455,485,577,578,583,584,596,610,611,817,818,822,823,824,825]],
['this',[1,2,3,10,11,33,37,38,52,53,54,55,75,76,77,78,79,80,81,82,83,84,85,86,90,93,94,95,96,97,98,99,100,101,102,103,104,106,107,110,111,112,114,115,116,117,119,120,122,123,127,128,132,135,136,139,142,144,145,146,147,150,151,175,176,177,178,179,180,183,185,201,202,203,204,215,216,217,266,267,279,280,283,293,301,348,349,350,352,355,357,380,402,403,404,405,406,407,409,410,411,413,414,421,423,424,427,430,431,434,435,436,452,454,455,458,460,466,478,487,488,496,497,498,499,506,509,512,539,557,563,566,567,572,573,574,575,577,578,583,584,590,593,595,596,619,620,624,640,642,658,661,743,744,748,754,765,766,780]],
['item',[1,2,3,7,10,11,33,55,57,75,142,144,145,146,147,150,151,152,158,266,267,270,271,318,319,332,337,338,347,348,349,352,354,405,406,407,409,410,411,412,415,423,424,430,431,498,499,509,563,566,567,575,576,577,578,590,595,619,620,624,634,658,661,765,766,787,817,818,819]],
['country',[1,2,3,12,13,49,75,129,131,279,280,289,291,312,348,349,357,358,360,498,499,514,516,555,566,567,576,619,620,628,630,656]],
['simplecontent',[1,2,3,12,23,33,52,215,216,236,237,240,248,250,279,280,289,348,349,357,358,454,455,458,470,498,499,512,514,619,620,626,628,636,664,665,675,676,679,788,789,792,799,832,833,836,844]],
['extension',[1,2,3,12,23,33,52,75,127,128,215,216,236,237,240,248,250,279,280,289,348,349,357,358,454,455,458,470,498,499,512,514,619,620,626,628,636,664,665,675,676,679,788,789,792,799,832,833,836,844]],
['base',[1,2,3,4,8,12,23,28,33,37,40,41,42,43,50,52,71,73,75,83,84,85,86,88,93,94,110,111,112,113,118,119,121,127,128,132,133,134,142,145,146,175,182,186,194,195,201,202,205,206,207,208,209,213,215,216,218,219,224,225,226,227,228,229,230,231,234,235,236,237,240,248,250,266,267,274,276,277,279,280,289,305,307,318,319,320,325,333,334,336,337,338,340,341,342,348,349,352,355,357,358,364,373,378,379,385,387,392,415,422,423,433,434,435,449,453,454,455,458,460,463,470,476,479,498,499,512,514,577,578,586,589,590,593,602,603,604,605,608,609,610,615,616,618,619,620,626,628,636,663,664,665,675,676,677,679,680,732,734,735,739,743,744,753,754,762,763,765,766,769,770,788,789,792,799,817,818,819,832,833,836,844]],
['attribute',[1,2,3,12,13,23,24,25,26,33,34,37,38,40,41,42,43,52,53,54,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,127,128,129,130,131,132,133,134,135,136,137,138,139,142,143,144,145,146,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,240,241,242,243,248,249,250,251,252,253,254,256,257,258,259,260,261,266,267,278,279,280,289,290,291,294,295,296,298,299,300,302,303,304,305,306,307,308,318,319,332,333,334,335,336,337,338,347,348,349,350,351,352,353,354,355,356,357,358,359,360,378,379,392,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,458,459,460,461,462,463,470,471,472,473,474,475,476,498,499,506,507,508,512,513,514,515,516,517,518,519,523,524,525,545,546,547,551,552,553,566,567,572,573,574,575,576,577,578,611,612,613,614,619,620,621,622,623,626,627,628,629,630,631,632,633,636,637,663,664,665,675,676,677,678,679,680,681,742,743,744,764,765,766,787,788,789,792,793,794,795,799,800,801,802,803,804,805,806,808,809,810,817,818,819,823,824,825,832,833,836,837,838,839,844,845,846,847,848,849,850,851,853,854,855]],
['isocode',[1,2,3,12,13,37,40,41,43,279,280,289,290,348,349,357,358,359,498,499,514,515,619,620,628,629]],
['letter',[1,2,3,12,13]],
['code',[1,2,3,6,7,9,12,13,14,15,52,53,57,75,129,130,131,206,207,209,210,215,216,220,236,237,240,241,250,252,279,280,289,291,293,328,348,349,357,358,360,361,376,407,413,431,454,455,458,459,468,470,473,489,491,495,498,499,509,514,516,521,527,563,577,578,603,619,620,624,628,630,634,644,661,722,743,744,756,763,765,766,767,768,781,784,785,786,788,789,792,793,799,801,807,817,818,822,823,824,832,833,836,837,844,846]],
['address',[1,2,3,12,13]],
['iatacode',[1,2,3,12,13]],
['region',[1,2,3,49,51,279,280,312,315,348,349,357,382,498,499,555,561,619,620,656,657]],
['voll',[1,2,3,49,51]],
['subregion',[1,2,3,51,279,280,315,348,349,357,386,498,499,561,619,620,657]],
['supplier',[1,2,3,52,54,75,119,120,215,216,217,222,279,280,316,318,319,328,348,349,404,407,498,499,509,550,563,619,620,624,658,661,664,665,715,722,743,744,756,765,766,784]],
['reservation-supplier-code',[1,2,3,52,53]],
['room',[1,2,3,50,52,53,75,93,94,110,118,175,186,348,349,431,498,499,557,558,559,560,615,616,618,765,766,768,770,771,780]],
['nonnegativeinteger',[1,2,3,29,30,31,33,52,54,75,83,84,85,93,94,103,106,107,108,109,110,111,112,113,119,121,132,133,134,135,136,139,142,144,145,146,167,168,175,176,177,178,180,183,185]],
['customer',[1,2,3,52,54,75,175,180,183,201,202,203,348,349,423,434,435,436,443,451,498,499,550,619,620,658]],
['commission',[1,2,3,10,75,119,120,132,138,175,184,577,578,593,595,619,620,625,743,744,754]],
['float',[1,2,3,10,75,78,79,80,81,82,86,88,90,91,92,110,114,115,116,117,119,120,132,137,138,175,184]],
['fixed',[1,2,3,10,75,119,120,577,578,611]],
['accountnr',[1,2,3,4]],
['simpletype',[1,2,3,4,8,28,37,40,41,42,43,50,71,73,75,83,84,85,93,94,110,111,112,113,118,119,121,132,133,134,142,145,146,175,182,186,194,195,201,202,205,206,207,208,209,213,215,216,218,219,224,225,226,227,228,229,230,231,234,235,266,267,274,276,277,279,280,305,307,318,319,320,325,333,334,336,337,338,340,341,342,348,349,352,355,357,364,373,378,379,385,387,392,415,422,433,434,435,449,453,454,455,458,460,463,470,476,479,577,578,586,589,590,593,602,603,604,605,608,609,610,615,616,618,619,620,663,664,665,675,676,677,679,680,732,734,735,739,743,744,753,754,762,763,765,766,769,770,817,818,819]],
['restriction',[1,2,3,4,8,28,37,40,41,42,43,50,71,73,75,83,84,85,93,94,110,111,112,113,118,119,121,132,133,134,142,145,146,175,182,186,194,195,201,202,205,206,207,208,209,213,215,216,218,219,224,225,226,227,228,229,230,231,234,235,266,267,274,276,277,279,280,305,307,318,319,320,325,333,334,336,337,338,340,341,342,348,349,352,355,357,364,373,378,379,385,387,392,415,422,433,434,435,449,453,454,455,458,460,463,470,476,479,577,578,586,589,590,593,602,603,604,605,608,609,610,615,616,618,619,620,663,664,665,675,676,677,679,680,732,734,735,739,743,744,753,754,762,763,765,766,769,770,817,818,819]],
['maxlength',[1,2,3,4,201,202,205,348,349,357,387,433,434,435,449,453,664,665,675,676,677,679,680,732,734]],
['value',[1,2,3,4,8,28,37,40,41,42,43,50,71,73,75,83,84,85,103,106,107,110,111,112,113,118,119,120,121,132,133,134,136,142,145,146,152,159,175,180,182,183,186,194,195,201,202,204,205,206,207,208,209,213,215,216,218,219,224,225,226,227,228,229,230,231,234,235,266,267,274,276,277,279,280,305,307,318,319,320,325,333,334,336,337,338,340,341,342,348,349,352,355,357,364,373,378,379,385,387,392,415,416,417,418,422,427,433,434,435,449,452,453,454,455,458,460,463,469,470,476,479,566,567,571,577,578,586,589,590,593,602,603,604,605,608,609,610,615,616,618,619,620,663,664,665,675,676,677,679,680,732,734,735,739,743,744,753,754,762,763,765,766,769,770,817,818,819]],
['minlength',[1,2,3,4,201,202,205,348,349,357,387,433,434,435,449,453,664,665,675,676,677,679,680,732,734]],
['destination',[1,2,3,15,75,129,130,131,279,280,293,318,319,323,348,349,357,361,498,499,521,566,567,576,619,620,634]],
['destinationattributes',[1,2,3,15,75,129]],
['costcenter',[1,2,3,11,348,349,409]],
['arrcode',[1,2,3,6]],
['tourbo',[1,2,3,6,7,57,348,349,422,765,766,785]],
['leistcode',[1,2,3,6]],
['arritemcode',[1,2,3,7]],
['subcode',[1,2,3,7]],
['normaloccupancy',[1,2,3,32,765,766,779]],
['integer',[1,2,3,17,18,32,37,40,41,42,201,202,203,204,224,225,226,227,228,229,230,231,234,235,266,267,270,271,274,276,277,348,349,352,354,357,365,367,368,370,371,406,410,412,427,434,435,436,452,454,455,458,460,487,498,499,528,529,532,535,537,548,577,578,579,580,584,585,589,590,593,599,604,605,607,619,620,640,641,642,643,645,646,649,652,654,664,665,685,688,689,691,692,695,698,699,700,702,724,725,735,736,737,738,739,743,744,753,754,759,765,766,772,773,774,775,778,779,817,818,826,827,828,829,830,832,833,841]],
['normal',[1,2,3,32,75,119,120,765,766,779]],
['occupancy',[1,2,3,32,765,766,775,778,779]],
['extrabedadults',[1,2,3,17,765,766,772]],
['number',[1,2,3,17,18,75,76,77,86,87,103,106,107,132,136,167,168,171,174,175,176,178,185,201,202,203,215,216,217,236,237,256,258,259,261,279,280,298,300,302,304,348,349,350,354,357,371,387,402,406,413,421,427,434,435,436,449,454,455,487,491,498,499,512,523,525,545,547,551,553,577,578,579,580,585,590,619,620,640,642,765,766,772,773,774,788,789,804,806,808,810,817,818,823,824,832,833,849,851,853,855]],
['extra',[1,2,3,17,18,75,93,94,765,766,772,773]],
['adults',[1,2,3,17,75,83,85,93,94,175,176,577,578,579,765,766,772,774]],
['extrabedchildren',[1,2,3,18,765,766,773]],
['children',[1,2,3,18,75,83,84,85,93,94,577,578,580,664,665,685,765,766,773]],
['currency',[1,2,3,14,37,40,41,75,86,88,89,90,91,92,577,578,581,664,665,694,743,744,747,817,818]],
['automatedfeecode',[1,2,3,9]],
['automated',[1,2,3,9,577,578,595]],
['used',[1,2,3,9,75,175,181,182,279,280,283,318,319,332,337,338,347,348,349,357,392,413,434,435,452,566,567,575,765,766,787]],
['cancellation',[1,2,3,9,266,267,268,275,348,349,403,566,567,577,578,593,743,744,754]],
['modification',[1,2,3,9,266,267,278]],
['fees',[1,2,3,9,266,267,277]],
['arrtype',[1,2,3,8]],
['enumeration',[1,2,3,8,28,37,40,41,42,50,71,73,75,83,84,85,110,113,118,119,121,132,133,134,142,145,146,175,182,186,194,195,206,207,208,215,216,218,219,224,225,226,227,228,229,230,231,234,235,266,267,274,276,277,279,280,305,307,318,319,320,325,333,334,336,337,338,340,341,342,348,349,352,355,357,364,373,378,379,385,392,415,422,454,455,458,460,463,470,476,479,577,578,593,603,604,605,609,610,615,616,618,619,620,663,664,665,732,734,735,739,743,744,754,763,765,766,769,770,817,818,819]],
['flightonlypackage',[1,2,3,8]],
['citypackage',[1,2,3,8,348,349,357,367,368,370,392]],
['buspackage',[1,2,3,8]],
['trainpackage',[1,2,3,8]],
['paymentcondition',[1,2,3,35]],
['todo',[1,2,3,35,73,74]],
['undefined',[1,2,3,35]],
['language',[1,2,3,28,266,267,272,333,334,336,348,349,357,378,379,498,499,557,619,620,663,664,665,694]],
['de-ch',[1,2,3,28,333,334,336,348,349,357,378,379,619,620,663]],
['en-us',[1,2,3,28,333,334,336,348,349,357,378,379,619,620,663]],
['fr-ch',[1,2,3,28,333,334,336,348,349,357,378,379,619,620,663]],
['it-ch',[1,2,3,28,333,334,336,348,349,357,378,379,619,620,663]],
['tourbotitle',[1,2,3,57]],
['group',[1,2,3,57,348,349,357]],
['items',[1,2,3,57,348,349,350,357,406,412,427]],
['have',[1,2,3,57,75,93,94,119,120,175,180,182,183,348,349,350,357,376,412,430,431]],
['same',[1,2,3,57,266,267,274,348,349,403,410,411,454,455,458,460,577,578,590]],
['pacxxx',[1,2,3,57]],
['tourbotext',[1,2,3,56]],
['minimumhotelstay',[1,2,3,30,348,349,357,368]],
['minimumtotalstay',[1,2,3,31,348,349,357,370]],
['maximumtotalstay',[1,2,3,29,348,349,357,367]],
['request',[1,2,3,50,75,142,143,144,146,279,280,283,454,455,458,460,765,766,769]],
['bookable',[1,2,3,50,224,225,226]],
['free',[1,2,3,50]],
['sale',[1,2,3,50]],
['fixeddate',[1,2,3,19]],
['boolean',[1,2,3,16,19,20,23,25,58,59,60,61,63,64,65,66,67,69,70,75,98,99,100,152,155,156,157,206,207,209,212,348,349,350,356,393,394,398,424,454,455,478,488,490,493,497,566,567,572,573,574,577,578,595,664,665,666,667,668,669,670,671,672,673,674,675,682,683,684,685,686,687,690,693,703,704,707,708,709,710,711,712,714,715,717,718,719,720,721,723,726,727,730,731]],
['internetbookable',[1,2,3,20]],
['exportoffer',[1,2,3,16]],
['isspecialoffer',[1,2,3,23]],
['fromdate',[1,2,3,23,24,33,34,58,59,62]],
['date',[1,2,3,23,24,26,33,34,37,38,58,59,62,68,75,95,96,97,98,100,101,102,103,104,105,106,107,142,143,152,153,154,175,179,181,224,225,232,233,266,267,269,273,348,349,357,365,372,374,380,393,394,396,405,406,411,412,434,435,450,454,455,458,460,467,566,567,568,569,664,665,695,696,697,711,713,728,729,743,744,749,765,766,780]],
['todate',[1,2,3,23,26,58,59,68]],
['soldout',[1,2,3,23,25]],
['passive',[1,2,3,33]],
['longer',[1,2,3,33]],
['booked',[1,2,3,33,75,142,144,145,146,348,349,427,619,620,640,642]],
['specified',[1,2,3,33]],
['cannot',[1,2,3,33,75,93,94,348,349,410,411]],
['after',[1,2,3,33,348,349,357,380,454,455,458,460,765,766,780]],
['invoicetitle',[1,2,3,22]],
['invoicedetail',[1,2,3,21]],
['cdata',[1,2,3,21,36,75,189,190,191,192,193,196,197,198,199,200,236,237,264,279,280,292,297,301,309,313,314,316,337,338,339,348,349,357,362,366,383,391,454,455,495,498,499,520,539,544,556,560,565,619,620,635,638,658,660,788,789,813,817,818,820,832,833,858]],
['priceinfo',[1,2,3,36,279,280,311]],
['traveldates',[1,2,3,58,348,349,357,390]],
['traveldate',[1,2,3,58,59,224,225,348,349,357,390]],
['inactive',[1,2,3,58,59,63]],
['exclude',[1,2,3,58,59,60]],
['iteminfos',[1,2,3,27,75,147,348,349,423]],
['prices',[1,2,3,37,38,44,75,175,182,577,578,593]],
['descs',[1,2,3,37,44,75,108,109]],
['desc',[1,2,3,37,44,75,108,109,127,128,348,349,393,394,397]],
['description',[1,2,3,37,44,75,152,158,206,207,209,211,266,267,272,279,280,294,295,305,306,333,334,335,337,338,339,348,349,357,378,430,431,454,455,470,474,498,499,506,507,517,518,566,567,570,615,616,617,619,620,621,622,631,632,663,664,665,694,765,766,771,776,817,818,823,825]],
['codes',[1,2,3,37,44,615,616,618]],
['node',[1,2,3,37,38,44,75,93,94,108,109,127,128,152,159,215,216,217,348,349,354,355,410,411,412,421,430,431,566,567,571,577,578,583,584,590,596]],
['currencies',[1,2,3,37,40]],
['idnr',[1,2,3,37,40,41,42]],
['required',[1,2,3,15,37,40,41,42,43,75,86,87,88,89,90,92,95,96,97,101,102,108,109,110,114,124,126,128,129,130,131,132,141,164,166,167,170,171,174,175,188,201,202,204,206,207,209,210,211,224,225,232,233,318,319,332,333,334,336,337,338,347,348,349,355,357,378,379,434,435,452,592,664,665,675,676,677,678,679,680,681,742]],
['length',[1,2,3,37,40,41,43,348,349,357,365]],
['perdayprices',[1,2,3,37,47]],
['perdaypriceschildren',[1,2,3,37,47,75,169]],
['addperdayprices',[1,2,3,37,39]],
['addperdaypriceschildren',[1,2,3,37,39,75,125]],
['onetimes',[1,2,3,37,46]],
['onetimeschildren',[1,2,3,37,46,75,165]],
['specialoffers',[1,2,3,37,48]],
['specialofferschildren',[1,2,3,37,48,75,187]],
['earlybookings',[1,2,3,37,45]],
['earlybookingschildren',[1,2,3,37,45,75,140]],
['keepdatabeforedate',[1,2,3,37,38]],
['optional',[1,2,3,12,13,23,24,25,26,33,34,37,38,52,53,54,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,91,93,94,98,99,100,103,104,105,106,107,110,111,112,113,115,116,117,118,119,120,121,122,123,124,126,132,133,134,135,136,137,138,139,141,142,143,144,145,146,149,164,166,167,168,170,171,172,173,175,176,177,178,179,180,181,182,183,184,185,186,188,201,202,203,204,205,206,207,208,209,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,234,235,240,241,242,243,248,249,250,251,252,253,254,256,257,258,259,260,261,267,278,289,290,291,294,295,296,298,299,300,302,303,304,305,306,307,308,328,334,335,348,349,350,351,352,353,354,356,357,358,359,360,392,407,428,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,453,454,455,458,459,460,461,462,463,470,471,472,473,474,475,476,495,506,507,508,509,512,513,514,515,516,517,518,519,523,524,525,545,546,547,551,552,553,563,567,572,573,574,575,576,577,578,592,593,611,612,613,614,619,620,621,622,623,624,626,627,628,629,630,631,632,633,636,637,661,663,722,743,744,756,764,765,766,781,784,786,787,792,793,794,795,799,800,801,802,803,804,805,806,808,809,810,817,818,819,823,824,825,836,837,838,839,844,845,846,847,848,849,850,851,853,854,855]],
['generally',[1,2,3,37,38,348,349,357]],
['product',[1,2,3,37,38,348,349,351,426,454,455,485,619,620,640,642]],
['deleted',[1,2,3,37,38]],
['updated',[1,2,3,37,38]],
['inserted',[1,2,3,37,38]],
['there',[1,2,3,37,38,348,349,402,423]],
['however',[1,2,3,37,38]],
['case',[1,2,3,37,38,75,86,90]],
['where',[1,2,3,37,38,348,349,402,412,498,499,506,517]],
['already',[1,2,3,37,38]],
['entered',[1,2,3,37,38]],
['external',[1,2,3,37,38,75,151,152,155,279,280,283,348,349,353,402,403,404,413,414,416,417,418,421,566,567,572,743,744,748]],
['system',[1,2,3,37,38,73,206,207,208,348,349,353,355,404,413,416,417,418,428]],
['contains',[1,2,3,37,38,348,349,357,498,499,557,577,578,583,584,596]],
['season',[1,2,3,37,38,75,175,179]],
['supplied',[1,2,3,37,38,75,93,94,110,114,115,116,117,119,120,348,349,355,498,499,542]],
['whose',[1,2,3,37,38]],
['smaller',[1,2,3,37,38,75,103,104,105]],
['than',[1,2,3,37,38,75,98,99,100,103,104,105,106,107,127,128,348,349,404,416,417,419]],
['will',[1,2,3,37,38,75,78,79,80,81,82,175,182,266,267,277,348,349,352,410,411,412,423,424,454,455,458,460,466,498,499,550]],
['remain',[1,2,3,37,38]],
['2015-01-01',[1,2,3,37,38]],
['then',[1,2,3,37,38,75,93,94,110,111,112,114,115,116,117,119,120,132,133,142,144,175,180,182,183,348,349,406,410,411,412,454,455,458,460,498,499,550,566,567,572,615,616,618]],
['until',[1,2,3,37,38,577,578,583,584,596]],
['including',[1,2,3,37,38]],
['2014-12-31',[1,2,3,37,38]],
['agent',[1,2,3,37,38,75,119,120,201,202,203,348,349,354,413,434,435,436,498,499,550,577,578,595]],
['arrangementitems',[1,2,3,5]],
['dossieritem',[1,2,3,5,348,349,350,353,354,355,357,377,387,414,434,435,438,439,440,441,442,443,444,445,446,447,448,449,454,455,458,460,577,578,743,744,748]],
['primary',[1,2,3,72,318,319,332,337,338,347,765,766,787]],
['action',[1,2,3,71]],
['delete',[1,2,3,71]],
['prod',[1,2,3,73,206,207,208]],
['educ',[1,2,3,73,206,207,208]],
['test',[1,2,3,73,206,207,208]],
['version',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,197,198,199,200,202,203,204,205,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,225,226,227,228,229,230,231,232,233,234,235,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,267,268,269,270,271,272,273,274,275,276,277,278,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,319,320,321,322,323,324,325,326,327,328,329,330,331,332,334,335,336,338,339,340,341,342,343,344,345,346,347,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,567,568,569,570,571,572,573,574,575,576,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,616,617,618,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,818,819,820,821,822,823,824,825,826,827,828,829,830,831,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861]],
['encoding',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,197,198,199,200,202,203,204,205,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,225,226,227,228,229,230,231,232,233,234,235,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,267,268,269,270,271,272,273,274,275,276,277,278,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,319,320,321,322,323,324,325,326,327,328,329,330,331,332,334,335,336,338,339,340,341,342,343,344,345,346,347,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,567,568,569,570,571,572,573,574,575,576,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,818,819,820,821,822,823,824,825,826,827,828,829,830,831,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861]],
['utf-16',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,197,198,199,200,202,203,204,205,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,225,226,227,228,229,230,231,232,233,234,235,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,267,268,269,270,271,272,273,274,275,276,277,278,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,319,320,321,322,323,324,325,326,327,328,329,330,331,332,334,335,336,338,339,340,341,342,343,344,345,346,347,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,567,568,569,570,571,572,573,574,575,576,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,616,617,618,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,818,819,820,821,822,823,824,825,826,827,828,829,830,831,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861]],
['countrycode',[15,75,129,131]],
['iteminfotexts',[27,75,147,150]],
['iteminforequests',[27,75,147,148]],
['addperdayprice',[39,75,125,126]],
['earlybooking',[45,75,140,141,664,665,695]],
['onetime',[46,75,165,166]],
['perdayprice',[47,75,108,109,169,170]],
['specialoffer',[48,75,78,79,80,81,82,86,90,187,188,664,665,735]],
['every',[75,127,128,224,225,227,228,229,230,231,234,235]],
['descid',[75,108,109,110,124,126,127,128,132,141,164,166,167,170,175,188]],
['translations',[75,127,128]],
['price',[75,76,77,86,87,93,94,95,96,97,101,102,108,109,110,111,112,113,114,115,116,117,118,119,120,122,123,127,128,132,134,138,175,184,186,266,267,275,348,349,350,357,369,375,434,435,443,451,577,578,590,593,595,664,665,741,743,744,754,817,818]],
['line',[75,76,77,110,111,112,119,120,127,128,132,138,175,184]],
['which',[75,95,96,97,101,102,108,109,110,111,112,119,120,127,128,132,135,136,139,175,182,348,349,403,404,498,499,550,557]],
['identifies',[75,127,128,577,578,590]],
['text',[75,127,128,151,152,158,279,280,292,348,349,355,454,455,457,465,470,474,489,498,499,500,501,502,520,544,557,560,565,566,567,570,817,818]],
['appropriate',[75,127,128]],
['placing',[75,127,128]],
['reference',[75,127,128,348,349,406,414,432,743,744,748]],
['list',[75,127,128,615,616,618]],
['reduces',[75,127,128]],
['size',[75,108,109,127,128,498,499,528,529,535,619,620,645,646,652]],
['dramatically',[75,127,128]],
['also',[75,127,128,348,349,402,424,454,455,489]],
['built',[75,127,128]],
['faster',[75,127,128]],
['added',[75,78,79,80,81,82,127,128]],
['each',[75,127,128]],
['complexcontent',[75,127,128]],
['translation',[75,127,128,152,158,189]],
['attributegroup',[75,76,78,83,86,93,95,98,101,103,108,110,119,122,124,127,128,132,164,167,175]],
['descidattributegroup',[75,108,110,127,128,132,175]],
['iteminfotext',[75,147,150,151,152]],
['iteminfo',[75,147,150,151,348,349,423,566,567,570,573,574,575,576]],
['iteminforequest',[75,147,148,149]],
['iteminforequestattributes',[75,142,147,148,149]],
['begindate',[75,151,152,153,266,267,269,348,349,405,410,411,454,455,458,460,566,567,568]],
['start',[75,98,100,152,153,348,349,406,566,567,568,664,665,735,739]],
['when',[75,78,79,80,81,82,103,104,110,113,142,143,152,153,154,175,182,266,267,270,271,348,349,357,372,374,498,499,550,566,567,568,569,577,578,595]],
['information',[75,142,143,152,153,154,279,280,292,297,309,316,348,349,350,355,357,416,423,424,498,499,506,517,520,544,557,560,565,566,567,568,569,572,619,620,658]],
['applies',[75,142,143,152,153,154,566,567,568,569]],
['inclusive',[75,110,111,152,153,154,566,567,568,569,615,616,618]],
['enddate',[75,151,152,154,266,267,273,348,349,406,410,411,454,455,458,460,566,567,569]],
['invoice',[75,151,152,156,348,349,424,454,455,466,498,499,556,566,567,573]],
['itinerary',[75,151,152,157,498,499,556,566,567,574]],
['info',[75,152,158,159,279,280,305,307,566,567,571,575]],
['only',[75,83,84,85,122,123,152,159,175,180,183,201,202,204,266,267,268,275,279,280,283,348,349,350,353,357,367,368,370,387,416,426,434,435,438,439,440,441,442,443,444,445,446,447,448,449,451,498,499,528,529,531,566,567,571,572,575,577,578,583,584,596,610,615,616,618,619,620,645,646,648,655]],
['sent',[75,152,159,279,280,292,348,349,402,410,411,454,455,458,460,498,499,520,544,550,560,565,566,567,571,615,616,618,619,620,658]],
['exists',[75,152,159,566,567,571]],
['freesell',[75,142,145]],
['freesellrelease',[75,142,144,149]],
['days',[75,103,106,107,132,133,142,144,175,180,183,266,267,274,348,349,410,454,455,458,460,619,620,640,642,664,665,735,739]],
['that',[75,93,94,122,123,142,144,348,349,416,423,498,499,509,550,563,577,578,590,595,619,620,624,658,661]],
['before',[75,103,106,107,142,144,454,455,458,460]],
['becomes',[75,142,144]],
['german',[75,189,190]],
['english',[75,189,191,279,280,292,498,499,520,544,557,560,565]],
['french',[75,189,192]],
['italian',[75,189,193]],
['phoneattributes',[75,171]],
['areacode',[75,171,172,236,237,256,257,259,260,279,280,298,299,302,303,498,499,523,524,545,546,551,552,788,789,804,805,808,809,832,833,849,850,853,854]],
['countryprefix',[75,171,173]],
['2-letter',[75,129,131]],
['based',[75,129,131]],
['iata',[75,129,130]],
['dest',[75,129,130]],
['perdaypriceattributes',[75,167,169,170]],
['buyattributegroup',[75,86,124,132,164,167,175]],
['sellgeneralattributegroup',[75,110,124,164,167]],
['dayattributegroup',[75,101,167]],
['childidxnrattributegroup',[75,93,124,167]],
['babychildattributegroup',[75,83,124,132,164,167,175]],
['maxnrnights',[75,132,136,141,167,168,170]],
['stay',[75,132,136,167,168,348,349,412]],
['nights',[75,132,136,167,168,175,180,183]],
['package',[75,167,168,348,349,355,357,361,365,376,378,380,385,387,392,406,412,434,435,438,439,440,441,442,443,444,445,446,447,448,449,454,455,487]],
['addperdaypriceattributes',[75,124,125,126]],
['datefromtoattributegroup',[75,95,124,132,164,175]],
['weekdaysvalidattributegroup',[75,122,124,164,175]],
['onetimeattributes',[75,164,165,166]],
['daterelevantattributegroup',[75,98,132,164,175]],
['specialofferattributes',[75,175,187,188]],
['fromdaybase',[75,175,178,188]],
['from',[75,95,96,103,104,106,110,111,112,132,135,175,178,224,225,227,228,229,230,231,234,235,348,349,357,388,817,818,823,824]],
['would',[75,93,94,108,109,175,178,185,215,216,217,348,349,413,430,431]],
['todaybase',[75,175,185,188]],
['paynights',[75,175,180,183,188,664,665,735,737]],
['many',[75,175,180,183,348,349,357,376]],
['does',[75,175,180,183,348,349,498,499,506,517,619,620,658]],
['effectively',[75,175,180,183]],
['fromday',[75,132,135,141,175,180,183,664,665,695,700]],
['today',[75,132,139,141,175,180,183]],
['book',[75,175,180,183]],
['pays',[75,175,180,183]],
['savenights',[75,175,180,183,188]],
['mutually',[75,103,104,105,106,107,175,180,183]],
['exclusive',[75,103,104,105,106,107,175,180,183]],
['attributes',[75,175,180,181,183]],
['allowed',[75,175,180,183,266,267,270,271,348,349,357]],
['save',[75,175,183]],
['savedaytype',[75,175,182,188]],
['describes',[75,175,182,279,280,301,498,499,539]],
['amounts',[75,175,182]],
['need',[75,119,120,175,182,348,349,350,416,417,419,566,567,572]],
['determining',[75,175,182]],
['special',[75,78,79,80,81,82,83,84,85,98,99,100,103,104,105,106,107,110,113,119,120,132,136,138,175,176,177,179,181,182,184,577,578,595]],
['offer',[75,78,79,80,81,82,83,84,85,103,104,105,106,107,132,136,175,176,177,181,182]],
['amount',[75,78,79,80,81,82,86,87,88,91,92,132,133,134,175,182,266,267,268,275,348,349,393,394,395,434,435,437,577,578,604,605,606,664,665,735,739,817,818]],
['day1',[75,175,182]],
['day2',[75,175,182]],
['day3',[75,175,182]],
['day4',[75,175,182]],
['day5',[75,175,182]],
['day6',[75,175,182]],
['day7',[75,175,182]],
['enddays',[75,175,182]],
['valid',[75,83,84,85,93,94,95,96,97,101,102,110,111,112,175,176,177,179,181,182,266,267,268,275]],
['startdays',[75,175,182]],
['average',[75,175,182,664,665,735,739]],
['minvalue',[75,175,182]],
['maxvalue',[75,175,182]],
['lastspoffenddate',[75,175,179,188]],
['defines',[75,175,179]],
['last',[75,98,99,175,179,266,267,271]],
['possible',[75,175,179]],
['booking',[75,98,99,100,103,104,105,106,107,132,133,135,139,175,179,279,280,301,348,349,357,376,402,403,404,413,421,454,455,467,468,469,498,499,512,527,539,619,620,644]],
['overlapping',[75,175,179]],
['offers',[75,175,179]],
['taken',[75,175,179]],
['calculating',[75,110,113,175,179]],
['hotel',[75,98,99,100,175,179,279,280,305,307,348,349,355,412,430,431,498,499,521,522,526,527,549,564,765,766,767]],
['bookin',[75,175,179]],
['ruletype',[75,175,181,188]],
['determines',[75,132,134,175,181]],
['always',[75,175,181]],
['daysbeforedeparturefrom',[75,103,104,105,106,107,132,141,175,181,188]],
['daysbeforedepartureto',[75,103,104,105,106,107,132,141,175,181,188]],
['calculation',[75,175,181,577,578,595]],
['datebeforedeparturefrom',[75,103,104,105,106,107,132,141,175,181,188]],
['datebeforedepartureto',[75,103,104,105,106,107,132,141,175,181,188]],
['calculatio',[75,175,181]],
['specialcommission',[75,110,119,120,124,126,132,138,141,164,166,167,170,175,184,188,577,578,595]],
['percentage',[75,93,94,119,120,132,137,138,175,184,206,207,209,213,266,267,268,275,348,349,350,664,665,695,701]],
['spezflag',[75,119,121,132,138,175,184]],
['must',[75,103,104,105,106,107,110,113,132,138,175,184,348,349,402,403,615,616,618]],
['childchildnr',[75,175,177,188]],
['baby',[75,83,84,124,126,132,141,164,166,167,170,175,176,177,188,664,665,685,686]],
['child',[75,83,85,93,94,124,126,132,141,164,166,167,170,175,176,177,188,664,665,685,687]],
['n-th',[75,175,177]],
['equal',[75,86,91,98,99,100,175,176,177]],
['first',[75,93,94,175,177,266,267,270,348,349,406,664,665,732,734]],
['second',[75,93,94,175,177,664,665,732,734]],
['childadultnr',[75,175,176,188]],
['accompanied',[75,175,176]],
['addamountattributegroup',[75,78,132,175]],
['daysdatebeforedepartureattributegroup',[75,103,132,175]],
['acctattributegroup',[75,76,110,132,175]],
['person',[75,108,109,110,114,115,116,117,118,175,186,348,349,357,369,375]],
['default',[75,110,114,115,116,117,118,175,186,348,349,357,392,427,577,578,593,743,744,754]],
['earlybookingattributes',[75,132,140,141]],
['early',[75,103,104,105,106,107,132,135,139]],
['rule',[75,103,104,132,135,136,139,577,578,590]],
['relevant',[75,98,99,100,103,104,110,111,112,122,123,132,133,135,136,139,348,349,353,566,567,573,574,577,578,593,619,620,655,743,744,754]],
['percent',[75,132,137,141,266,267,275]],
['forcedisplay',[75,132,133,134,141]],
['whether',[75,132,134]],
['show',[75,132,134]],
['shown',[75,132,133,134]],
['foralldays',[75,132,133,141]],
['once',[75,132,133,566,567,575]],
['connected',[75,132,136]],
['stays',[75,132,136]],
['different',[75,132,136,348,349,357,376]],
['field',[75,132,136]],
['identified',[75,132,136,577,578,590]],
['maximum',[75,93,94,132,136,619,620,640]],
['datefrom',[75,95,96,98,100,124,126,132,141,164,166,175,188]],
['dateto',[75,95,97,98,99,124,126,132,141,164,166,175,188]],
['weekdaysvalid',[75,122,123,124,126,164,166,175,188]],
['seven',[75,122,123]],
['character',[75,122,123,454,455,469]],
['above',[75,122,123]],
['example',[75,119,120,122,123,348,349,357,619,620,658]],
['interpreted',[75,122,123]],
['monday',[75,122,123,224,225,228]],
['babies',[75,83,84]],
['order',[75,108,109]],
['prevent',[75,108,109]],
['duplication',[75,108,109]],
['data',[75,108,109,348,349,350,355,403,423,498,499,528,529,530,550,619,620,645,646,647,658]],
['export',[75,108,109]],
['exponentially',[75,108,109]],
['increase',[75,108,109]],
['file',[75,108,109]],
['common',[75,108,109]],
['texts',[75,108,109]],
['lines',[75,93,94,108,109,110,113]],
['stored',[75,108,109,348,349,421,423]],
['referenced',[75,108,109,577,578,590]],
['preis',[75,108,109,664,665,732,734]],
['nacht',[75,108,109]],
['prix',[75,108,109]],
['personne',[75,108,109]],
['nuit',[75,108,109]],
['2013-02-01',[75,108,109]],
['buygross',[75,86,91,124,126,132,141,164,166,167,170,175,188]],
['gross',[75,86,91]],
['buying',[75,86,87,89,91,92]],
['normally',[75,78,79,80,81,82,86,91,119,120,279,280,292,293,348,349,410,411,454,455,458,460,466,469,498,499,520,544,560,565]],
['buynet',[75,86,90,91,92,124,126,132,141,164,166,167,170,175,188]],
['buyacct',[75,86,87,124,126,132,141,164,166,167,170,175,188]],
['account',[75,76,77,86,87]],
['buycurr',[75,86,89,124,126,132,141,164,166,167,170,175,188]],
['buyamtbasecurr',[75,86,88,90,124,126,132,141,164,166,167,170,175,188]],
['buyexchgrate',[75,86,90,124,126,132,141,164,166,167,170,175,188]],
['sometimes',[75,86,90]],
['zero',[75,86,90]],
['interface',[75,86,90,348,349,410,411,424,498,499,550]],
['needs',[75,78,79,80,81,82,86,90]],
['informed',[75,86,90]],
['explicitly',[75,86,90]],
['what',[75,86,90,279,280,301,348,349,430,431,498,499,539]],
['exchange',[75,86,90]],
['rate',[75,86,90,577,578,594,743,744,755]],
['startdaterelevant',[75,98,100,132,141,164,166,175,188]],
['fits',[75,98,99,100]],
['into',[75,98,99,100]],
['period',[75,98,99,100,348,349,423]],
['greater',[75,98,100]],
['enddaterelevant',[75,98,99,132,141,164,166,175,188,664,665,703]],
['less',[75,98,99]],
['specific',[75,101,102,279,280,289,291,348,349,353,357,358,360,498,499,514,516,619,620,628,630]],
['specialcommissionattributegroup',[75,110,119]],
['note',[75,103,106,107,119,120,279,280,293,348,349,357,376,402,406]],
['combination',[75,119,120]],
['specialcommissionflag',[75,110,119,120,121,124,126,164,166,167,170]],
['sets',[75,119,120]],
['both',[75,119,120,266,267,268,275]],
['meal',[75,119,120,454,455,489,498,499,544,615,616,765,766,776,777,788,789,807]],
['differs',[75,119,120]],
['given',[75,119,120]],
['travel',[75,119,120,348,349,423]],
['addamount1',[75,78,79,132,141,175,188]],
['calculated',[75,78,79,80,81,82]],
['negative',[75,78,79,80,81,82]],
['cost',[75,78,79,80,81,82,348,349,422]],
['breakfast',[75,78,79,80,81,82,454,455,489,615,616,618]],
['included',[75,78,79,80,81,82,279,280,301,498,499,539,765,766,776]],
['addamount2',[75,78,80,132,141,175,188]],
['addamount3',[75,78,81,132,141,175,188]],
['addamount4',[75,78,82,132,141,175,188]],
['agefrom',[75,93,94,110,111,112,124,126,164,166,167,170]],
['lower',[75,110,111]],
['bound',[75,110,111,112]],
['ageto',[75,93,94,110,111,112,124,126,164,166,167,170]],
['persons',[75,93,94,110,111,112,348,349,357,371]],
['incl',[75,110,111,112]],
['mininclusive',[75,110,111,112,206,207,209,213,577,578,586,589,590,602,604,605,608,743,744,753,762]],
['maxinclusive',[75,110,111,112,206,207,209,213,577,578,586,602,604,605,608,743,744,762]],
['non-inclusive',[75,110,112]],
['notspecialrelevant',[75,110,113,124,126,164,166,167,170]],
['some',[75,110,113,348,349,402,416,417,419]],
['ignored',[75,110,113]],
['childidxnr',[75,93,94,124,126,167,170]],
['childindexnr',[75,93,94]],
['effective',[75,93,94,348,349,402]],
['additional',[75,93,94,279,280,292,498,499,520,557,565]],
['double',[75,93,94,498,499,559]],
['optionally',[75,93,94]],
['allows',[75,93,94]],
['either',[75,93,94,103,104,105,106,107]],
['following',[75,93,94,615,616,618]],
['range',[75,93,94]],
['type2',[75,93,94]],
['pricelist',[75,93,94]],
['search',[75,93,94]],
['kinderpreisspez',[75,93,94]],
['prozermaessig',[75,93,94]],
['type3',[75,93,94]],
['they',[75,103,104,105,106,107,348,349,416]],
['mapped',[75,103,106,107,498,499,550]],
['current',[75,103,106,107,577,578,590]],
['minus',[75,103,106,107]],
['larger',[75,103,106,107]],
['daysbeforedeparture',[75,103,106,107]],
['made',[75,103,104,348,349,403,404,413,454,455,467]],
['acct',[75,76,77,110,124,126,132,141,164,166,167,170,175,188]],
['created',[194,196,201,224,236,333,337,615,788,817,832]],
['studio',[194,196,201,215,224,236,318,333,337,615,664,743,788,817,832]],
['internalpricetype',[194,195,266,267,278,577,578,613,743,744,764]],
['flightticket',[194,195]],
['flighttax',[194,195]],
['flightfee',[194,195]],
['hotelroom',[194,195]],
['insurance',[194,195,348,349,577,578,593,743,744,754,817,818,819,822]],
['cancellationfee',[194,195,266,267,278,348,349,408]],
['modificationfee',[194,195,266,267,278]],
['creditnote',[194,195]],
['customerdossierfee',[194,195]],
['packageitemdescription',[196,197,454,455,492,832,833,852]],
['invoicetext',[196,197,199,492,852]],
['itinerarytext',[196,197,200,492,852]],
['departuretext',[196,197,198,492,852]],
['pricetravellertype',[201,202,577,578,591,592]],
['travellerseq',[201,202,205,348,349,434,435,453,592]],
['travellerid',[201,202,204,348,349,434,435,452,592]],
['display',[201,202,204,279,280,297,309,314,316,348,349,353,454,455,466]],
['purposes',[201,202,204,348,349,416]],
['customernr',[201,202,203,348,349,434,435,436,592]],
['traveller',[201,202,203,348,349,434,435,436]],
['database',[201,202,203,318,319,332,337,338,347,348,349,357,392,434,435,436,765,766,787]],
['projecttype',[206,207,348,349,428]],
['project',[206,207,209,348,349,350,428]],
['decimal',[206,207,209,213,266,267,268,275,348,349,357,369,375,393,394,395,399,434,435,437,443,451,498,499,510,541,543,577,578,586,588,594,597,598,602,604,605,606,608,664,665,695,701,715,716,740,741,743,744,752,755,757,758,762]],
['extcostmanagement',[206,207,209,212]],
['suppliertype',[215,216,318,319,328,348,349,407,454,455,495,498,499,509,563,619,620,624,661,664,665,715,722,743,744,756,765,766,781,784,786]],
['airlinenr',[215,216,217,328,407,495,509,563,624,661,722,743,744,745,756,781,784,786]],
['airline',[215,216,217,348,349,357,387,434,435,449,454,455,491,664,665,704,705]],
['contain',[215,216,217]],
['service',[215,216,223,328,348,349,357,384,407,495,509,563,624,661,722,756,781,784,786]],
['oder',[215,216,220,223,498,499,557]],
['imho',[215,216,220]],
['kuon',[215,216,220]],
['apicode',[215,216,218,328,407,495,509,563,624,661,722,756,781,784,786]],
['cain',[215,216,218]],
['tuictspeg',[215,216,218]],
['siha',[215,216,218]],
['blumar',[215,216,218]],
['pronto',[215,216,218,219]],
['tuicts',[215,216,218]],
['tico',[215,216,218]],
['comres',[215,216,218,219]],
['tourico',[215,216,218,219]],
['hotelbeds',[215,216,218,219]],
['ivector',[215,216,218]],
['broker',[215,216,219,328,407,495,509,563,624,661,722,756,781,784,786]],
['iris',[215,216,219]],
['payableto',[215,216,221,328,407,495,498,499,509,550,563,624,661,722,756,781,784,786]],
['travelbegindate',[224,225,226,227,228,229,230,231,232,234,235]],
['travelenddate',[224,225,226,233]],
['excludetraveldate',[224,225,226]],
['periode',[224,225,226]],
['till',[224,225,227,228,229,230,231,234,235]],
['next',[224,225,227,228,229,230,231,234,235,266,267,274]],
['tuesday',[224,225,234]],
['wednesday',[224,225,235]],
['thursday',[224,225,231]],
['friday',[224,225,227]],
['saturday',[224,225,229]],
['sunday',[224,225,230]],
['\productitemprice',[236,318,348,454,619,765,788,832]],
['\document',[236,348]],
['buscode',[236,237,244]],
['busnumber',[236,237,245]],
['departure',[236,237,250,454,455,458,460,463,470,474,475,476,498,499,517,619,620,631,788,789,799,832,833,844]],
['time',[236,237,240,243,250,251,254,279,280,294,296,305,308,454,455,458,460,462,470,471,472,475,481,498,499,506,508,517,519,619,620,621,623,631,633,788,789,792,795,799,800,803,832,833,836,839,844,845,848]],
['checkintime',[236,237,250,251,454,455,470,472,788,789,799,800,832,833,844,845]],
['terminal',[236,237,240,242,250,253,454,455,458,461,470,474,832,833,836,838,844,847]],
['arrival',[236,237,240,454,455,458,460,463,493,498,499,506,619,620,621,788,789,792,832,833,836]],
['seat',[236,237,265,454,455,496,788,789,814,832,833,859]],
['confirmationnr',[236,237,248,279,280,288,498,499,512,619,620,626,788,789,798,832,833,843]],
['confirmedby',[236,237,248,249,498,499,512,513,619,620,626,627,636,637]],
['companyname',[236,237,247,788,789,797,832,833,842]],
['address1',[236,237,238,279,280,281,498,499,504,788,789,790,832,833,834]],
['address2',[236,237,239,279,280,282,498,499,505,788,789,791,832,833,835]],
['postalcode',[236,237,262,279,280,310,498,499,542,554,788,789,811,832,833,856]],
['city',[236,237,246,279,280,286,348,349,357,392,454,455,458,470,473,498,499,511,542,788,789,796,832,833,840]],
['phone',[236,237,259,279,280,302,498,499,551,788,789,808,832,833,853]],
['remark',[236,237,264,279,280,313,348,349,357,383,454,455,495,498,499,556,788,789,813,832,833,858]],
['documents',[236,237,255,348,349,357,363]],
['document',[236,237,255,337,338,348,349,357,363,566,567,575]],
['productitemprices',[236,237,263,318,319,327,454,455,494,619,620,655,765,766,782,788,789,812,832,833,857]],
['productitemprice',[236,237,263,318,319,327,454,455,494,619,620,655,664,665,765,766,782,788,789,812,832,833,857]],
['\description',[266,664]],
['\generalcodes\internalpricetype',[266,577,743]],
['dossier',[266,267,269,273,277,348,349,353,354,405,406,407,411,413,415,423,424,430,431,432,498,499,557,577,578,593,743,744,754]],
['creation',[266,267,269,273]],
['descriptions',[266,267,272,664,665,694]],
['supported',[266,267,272,664,665,694]],
['amout',[266,267,268]],
['total',[266,267,275,348,349,352]],
['daybevordeparturebegin',[266,267,270]],
['cancled',[266,267,270,271]],
['daybevordepartureend',[266,267,271]],
['processfee',[266,267,277]],
['process',[266,267,277]],
['applied',[266,267,277]],
['pricetype',[266,267,276,278,577,578,584,593,611,614,743,744,754]],
['change',[266,267,276]],
['storno',[266,267,276,278]],
['nrdaysfeeapply',[266,267,274]],
['\carcategory',[279]],
['company',[279,280,287,293]],
['rental',[279,280,287]],
['phonecountrycode',[279,280,289,291,348,349,357,358,360,498,499,514,516,619,620,628,630]],
['international',[279,280,289,291,348,349,357,358,360,498,499,514,516,619,620,628,630]],
['telephone',[279,280,289,291,348,349,357,358,360,498,499,514,516,619,620,628,630]],
['switzerland',[279,280,289,291,348,349,357,358,360,498,499,514,516,619,620,628,630]],
['carcode',[279,280,284]],
['category',[279,280,285,318,319,321,348,349,431,498,499,510]],
['amenities',[279,280,301,498,499,539]],
['pickup',[279,280,305,309]],
['airport',[279,280,305,307,454,455,493,498,499,506,517]],
['walkin',[279,280,305,307]],
['pickupinfo',[279,280,309]],
['dropoff',[279,280,294,297]],
['dropoffinfo',[279,280,297]],
['descriptionvoucher',[279,280,292,498,499,520]],
['displayed',[279,280,292,348,349,357,373,402,498,499,520,544,556,560,565,566,567,572,615,616,618]],
['voucher',[279,280,292,314,498,499,520,544,560,565,619,620,661]],
['regarding',[279,280,292,498,499,520,544,560,565]],
['remarkvoucher',[279,280,314]],
['wish',[279,280,314,498,499,556,565]],
['supplierinfos',[279,280,316]],
['catalog',[279,280,293,348,349,430]],
['real',[279,280,293]],
['rather',[279,280,293]],
['identifier',[279,280,293,348,349,416,417,419]],
['alamo',[279,280,293]],
['carcategories',[279,280,283]],
['developer',[279,280,283]],
['sends',[279,280,283]],
['availability',[279,280,283,619,620,655]],
['carcategory',[279,280,283,318,319]],
['\generalcodes\suppliertype',[318,348,498,619,664,743,765]],
['crscode',[318,319,322]],
['tourbocode',[318,319,329,765,766,785]],
['camper',[318,319,320]],
['miscellaneous',[318,319,325,348,349,355,619,620,634,644]],
['plancode',[318,319,326]],
['tourbodescription',[318,319,330]],
['includeddescription',[318,319,324]],
['reciever',[318,319,332,337,338,347,348,349,357,392,765,766,787]],
['shortdescription',[337,338,344]],
['template',[337,338,345]],
['ismailing',[337,338,341]],
['ismailattachment',[337,338,340]],
['isscan',[337,338,342]],
['--xs',[348,349,357,392,817,818]],
['\fifa\projects',[348]],
['\flight',[348]],
['\car',[348]],
['\hotel',[348]],
['\miscellaneous',[348]],
['\bus',[348]],
['\train',[348]],
['\ship',[348]],
['\text',[348]],
['\itemprice',[348]],
['\purchaseprice',[348]],
['\cancellationfee',[348]],
['\iteminfo',[348]],
['\generalcodes\traveldate',[348]],
['\generalcodes\projecttype',[348]],
['logicdataproductseq',[348,349,426,454,455,485]],
['unique',[348,349,351,404,414,426,454,455,485,487,577,578,611,743,744,748]],
['logicalkey',[348,349,426,454,455,485]],
['flights',[348,349,426]],
['begin',[348,349,405]],
['duration',[348,349,410,411,454,455,458,460,481]],
['nodes',[348,349,410,411,454,455,458,460]],
['response',[348,349,410,411,454,455,458,460]],
['implementers',[348,349,410,411]],
['expect',[348,349,410,411]],
['startdate',[348,349,406,410,411]],
['numer',[348,349,410,454,455,480,498,499,506,517]],
['numberofitems',[348,349,427]],
['ought',[348,349,427]],
['shortdescription1',[348,349,430]],
['short',[348,349,430,431]],
['shortdescription2',[348,349,431]],
['status',[348,349,433]],
['externalsource',[348,349,415]],
['source',[348,349,415]],
['mobs',[348,349,415]],
['fifa',[348,349,415]],
['dynapack',[348,349,415]],
['otfonly',[348,349,415]],
['othonly',[348,349,415]],
['voegele',[348,349,415]],
['tuiinc',[348,349,415]],
['dynap',[348,349,415]],
['touro',[348,349,415]],
['oltzug',[348,349,415]],
['chrtr',[348,349,415]],
['externaldossiernr',[348,349,413]],
['create',[348,349,413]],
['apibookingnr',[348,349,402,404]],
['here',[348,349,402,454,455,489]],
['hotelitem',[348,349,402]],
['caritem',[348,349,402]],
['cases',[348,349,402,454,455,458,460]],
['values',[348,349,350,402]],
['differ',[348,349,402]],
['apisubsystem',[348,349,404]],
['subsystem',[348,349,404]],
['more',[348,349,357,378,404,416,417,419,664,665,715]],
['background',[348,349,404]],
['therefore',[348,349,404]],
['necessarily',[348,349,404]],
['davinci',[348,349,404]],
['architecture',[348,349,404]],
['apiclient',[348,349,403]],
['client',[348,349,403]],
['center',[348,349,403]],
['over',[348,349,403]],
['connection',[348,349,403]],
['original',[348,349,403]],
['gdssource',[348,349,422]],
['amadeus',[348,349,422]],
['galileo',[348,349,422]],
['sabre',[348,349,422]],
['worldspan',[348,349,422]],
['tmir',[348,349,422]],
['tosv',[348,349,357,422]],
['tour',[348,349,422]],
['plus',[348,349,422,498,499,510]],
['cmir',[348,349,357,421,422,577,578,593]],
['cets',[348,349,422]],
['carrier',[348,349,422,454,455,491]],
['tocharter',[348,349,422]],
['charter',[348,349,422]],
['tuicharter',[348,349,422]],
['gdsbookingnr',[348,349,421]],
['bookingsupplier',[348,349,407]],
['imported',[348,349,407]],
['projects',[348,349,428]],
['travellers',[348,349,434,577,578,591]],
['listet',[348,349,434,577,578,591]],
['welche',[348,349,434,577,578,591]],
['dieser',[348,349,434,577,578,591]],
['leistung',[348,349,434,577,578,591]],
['verknuepft',[348,349,434,577,578,591]],
['sind',[348,349,434,577,578,591]],
['finding',[348,349,434,435,452]],
['correct',[348,349,434,435,452]],
['traveler',[348,349,434,435,452]],
['ticketprice',[348,349,434,435,451]],
['ticket',[348,349,357,369,375,434,435,451,577,578,593,664,665,732,734,743,744,754]],
['supply',[348,349,357,387,434,435,438,439,440,441,442,443,444,445,446,447,448,449,451]],
['flight',[348,349,355,357,387,392,434,435,438,439,440,441,442,443,444,445,446,447,448,449,451,454,455,470,475,478,480,481,482,483,484,486,487,488,490,496,497,498,499,506,517,577,578,593,664,665,704]],
['taxprice',[348,349,434,435,443]],
['ticketingairline',[348,349,434,435,449]],
['ticketing',[348,349,357,387,434,435,449]],
['ticket1',[348,349,434,435,444]],
['ticketnumber',[348,349,434,435,444,445,446,447,448]],
['segment1',[348,349,434,435,438,444]],
['ticket2',[348,349,434,435,445]],
['segment2',[348,349,434,435,439,445]],
['ticket3',[348,349,434,435,446]],
['segment3',[348,349,434,435,440,446]],
['ticket4',[348,349,434,435,447]],
['segment4',[348,349,434,435,441,447]],
['ticket5',[348,349,434,435,448]],
['segment5',[348,349,434,435,442,448]],
['seat1',[348,349,434,435,438]],
['seatnumber',[348,349,434,435,438,439,440,441,442]],
['seat2',[348,349,434,435,439]],
['seat3',[348,349,434,435,440]],
['seat4',[348,349,434,435,441]],
['seat5',[348,349,434,435,442]],
['opcprice',[348,349,434,435,437]],
['payment',[348,349,434,435,437,498,499,509,550,563,577,578,593,619,620,624]],
['charge',[348,349,434,435,437,577,578,593]],
['ticketissuedate',[348,349,434,435,450]],
['sourcedossierseq',[348,349,432]],
['existing',[348,349,432]],
['itemnotoninvoice',[348,349,424]],
['true',[348,349,350,424,454,455,478,488,490,493,497,566,567,572,573,574,577,578,595]],
['not-on-invoice',[348,349,424]],
['flag',[348,349,424]],
['printed',[348,349,424,619,620,661]],
['debit',[348,349,424]],
['transferred',[348,349,424]],
['bookkeeping',[348,349,424]],
['noinv',[348,349,424]],
['externalitemnr',[348,349,414,743,744,748]],
['choice',[348,349]],
['transfers',[348,349]],
['tickets',[348,349]],
['another',[348,349]],
['dossieritems',[348,349]],
['potential',[348,349]],
['reservation',[348,349]],
['train',[348,349,355,357,392,832,833]],
['ship',[348,349,355,788,789]],
['send',[348,349,454,455,489]],
['elements',[348,349,357]],
['descriptive',[348,349]],
['strings',[348,349]],
['about',[348,349,498,499,557,619,620,658]],
['visa',[348,349]],
['regulations',[348,349]],
['passport',[348,349,454,455,493]],
['rules',[348,349]],
['vacinnation',[348,349]],
['details',[348,349]],
['workflow',[348,349,406]],
['central',[348,349]],
['receiver',[348,349]],
['processes',[348,349]],
['dossiers',[348,349]],
['third',[348,349,412]],
['parties',[348,349]],
['level',[348,349,357]],
['recursion',[348,349,357]],
['detail',[348,349,357,362,619,620,635,817,818,820]],
['fixdate',[348,349,357,365]],
['passivedate',[348,349,357,380]],
['available',[348,349,357,369,380,765,766,780]],
['numberofpersons',[348,349,357,371]],
['shortoffer',[348,349,357,372,373,374,385]],
['offerstartdate',[348,349,357,374]],
['begins',[348,349,357,374]],
['internet',[348,349,357,372,374]],
['offerenddate',[348,349,357,372]],
['ends',[348,349,357,372]],
['offerissoldout',[348,349,357,373]],
['sold',[348,349,357,373]],
['sould',[348,349,357,373]],
['still',[348,349,357,373]],
['packageofferdescription',[348,349,357,378]],
['detailed',[348,349,357,378]],
['ticketairline',[348,349,357,387]],
['faretype',[348,349,357,364]],
['consolidtor',[348,349,357,364]],
['published',[348,349,357,364]],
['touroperator',[348,349,357,364]],
['minimumprice',[348,349,357,369]],
['cheapest',[348,349,357,369]],
['officialprice',[348,349,357,375]],
['official',[348,349,357,375]],
['frequentflyer',[348,349,357,366]],
['vendorlocator',[348,349,357,391]],
['packageitems',[348,349,357,377]],
['ticketgroupsegmentstring',[348,349,357,388]],
['segmentstring',[348,349,357,388]],
['packagecode',[348,349,357,376]],
['pacab1',[348,349,357,376]],
['types',[348,349,357,376]],
['packagetype',[348,349,357,392]],
['flightonly',[348,349,357,392]],
['trainrounddomesic1hotel',[348,349,357,392]],
['trainrounddomesic2hotel',[348,349,357,392]],
['itemprices',[348,349,425]],
['itemprice',[348,349,425,577,578,583]],
['purchaseprices',[348,349,429]],
['purchaseprice',[348,349,429,743,744]],
['cancellationfees',[348,349,408]],
['externalsystemids',[348,349,416]],
['uses',[348,349,416,615,616,618]],
['these',[348,349,416,454,455,458,460]],
['fields',[348,349,416]],
['pass',[348,349,416]],
['tripadvisor',[348,349,416]],
['generate',[348,349,416]],
['survey',[348,349,416]],
['mails',[348,349,416]],
['externalsystemid',[348,349,416,417]],
['externalsystemidtype',[348,349,416,417,420]],
['tripadvisorid',[348,349,416,417,420]],
['tripadvisorsupplierid',[348,349,416,417,420]],
['airremark',[348,349,416,417,420]],
['externalsystemidtag',[348,349,416,417,419]],
['externalsysteminformation',[348,349,416,417,419]],
['externalsystemidcode',[348,349,416,417,418]],
['relation',[348,349,423]],
['might',[348,349,355,423,619,620,658]],
['useful',[348,349,423,566,567,575]],
['building',[348,349,423]],
['activity',[348,349,423]],
['addinfos',[348,349,393]],
['slhlpreisinfo',[348,349,393]],
['addinfo',[348,349,393,394]],
['ismanual',[348,349,393,394,398]],
['beginday',[348,349,406,412]],
['part',[348,349,406]],
['gets',[348,349,406]],
['import',[348,349,406]],
['make',[348,349,355,406]],
['sense',[348,349,350,406]],
['endday',[348,349,412]],
['night',[348,349,412]],
['starts',[348,349,412]],
['automatically',[348,349,412]],
['dossieritemseq',[348,349,353,577,578,583]],
['wishes',[348,349,353]],
['modify',[348,349,350,353]],
['basedataproductseq',[348,349,351,577,578,611]],
['position',[348,349,354,577,578,590]],
['relative',[348,349,354]],
['maps',[348,349,354]],
['duplicated',[348,349,355]],
['respective',[348,349,355]],
['supplying',[348,349,355]],
['interpretation',[348,349,355]],
['caller',[348,349,355]],
['little',[348,349,355]],
['simpler',[348,349,355]],
['implement',[348,349,355]],
['consolidate',[348,349,352]],
['sellingprices',[348,349,352]],
['consolidated',[348,349,352]],
['priceline',[348,349,352,577,578,590,593,743,744,754]],
['allowprojectsentry',[348,349,350]],
['user',[348,349,350,498,499,506,517]],
['numbers',[348,349,350,454,455,496]],
['makes',[348,349,350]],
['priced',[348,349,350]],
['viewonly',[348,349,356]],
['\generalcodes\packageitemdescription',[454,832]],
['airlinecode',[454,455,456,482]],
['flightnumber',[454,455,480,486,619,620,636]],
['flightdirection',[454,455,479]],
['outbound',[454,455,479]],
['inbound',[454,455,479]],
['zurich',[454,455,470]],
['checkin',[454,455,470,472]],
['checkinoffset',[454,455,470,471]],
['transfer',[454,455,458,463,470,476,619,620,644]],
['departuredescription',[454,455,477]],
['london',[454,455,458]],
['dayindicator',[454,455,458,460]],
['requires',[454,455,458,460,490]],
['arrivaldescription',[454,455,464]],
['class',[454,455,466,469,483,832,833,841]],
['claseffective',[454,455,469]],
['between',[454,455,469]],
['flighttime',[454,455,481]],
['baggageallowance',[454,455,465]],
['describing',[454,455,457,465,489]],
['baggage',[454,455,465]],
['allowance',[454,455,465]],
['airplanetype',[454,455,457]],
['airplane',[454,455,457]],
['airbus',[454,455,457]],
['could',[454,455,489,498,499,506,517]],
['bookingnr',[454,455,468]],
['domesticflight',[454,455,478]],
['domestic',[454,455,478]],
['newcheckin',[454,455,490]],
['renewed',[454,455,490]],
['check-in',[454,455,490]],
['viaflight',[454,455,497]],
['followon',[454,455,497]],
['longhaul',[454,455,488]],
['passportcontrol',[454,455,493]],
['control',[454,455,493]],
['operatingcarrriercode',[454,455,491]],
['operating',[454,455,491]],
['bookingclass',[454,455,466]],
['bookingdate',[454,455,467]],
['logickey',[454,455,487]],
['logical',[454,455,482,483,484,486,487]],
['legs',[454,455,487]],
['logicclass',[454,455,483]],
['logicclassdescription',[454,455,484]],
['classdescription',[454,455,484]],
['logicairlinecode',[454,455,482]],
['logicflightnr',[454,455,486]],
['seatstring',[454,455,496]],
['unstructured',[454,455,496]],
['\room',[498]],
['hotelname',[498,499,538]],
['location',[498,499,542]],
['overrides',[498,499,542,577,578,595]],
['mobile',[498,499,545]],
['nrrooms',[498,499,548]],
['roomtype',[498,499,559,765,766,783]],
['deluxe',[498,499,559]],
['roomvoucher',[498,499,560]],
['mealvoucher',[498,499,544]],
['wishvoucher',[498,499,565]],
['roomdescription',[498,499,557]],
['dusche',[498,499,557]],
['bath',[498,499,557]],
['shower',[498,499,557]],
['toilette',[498,499,557]],
['confirmation',[498,499,512]],
['arrive',[498,499,506]],
['3i401y',[498,499,506,517]],
['punta',[498,499,506,517]],
['arenas-santiago',[498,499,506,517]],
['chile',[498,499,506,517]],
['departthis',[498,499,517]],
['email',[498,499,522]],
['weburl',[498,499,564]],
['hotelcode',[498,499,527]],
['bellag',[498,499,527]],
['bellagio',[498,499,527]],
['owner',[498,499,549]],
['star',[498,499,510]],
['stars',[498,499,510]],
['unknown',[498,499,510]],
['hotelchain',[498,499,526]],
['full',[498,499,526,615,616,618]],
['chain',[498,499,526]],
['holiday',[498,499,526]],
['billingsupplier',[498,499,509,550,619,620,624]],
['receive',[498,499,509,563,619,620,624]],
['vouchersupplier',[498,499,563,619,620,661,765,766,786]],
['known',[498,499,550]],
['manner',[498,499,550]],
['structured',[498,499,550]],
['format',[498,499,550]],
['table',[498,499,550]],
['payaleto',[498,499,550]],
['gives',[498,499,550]],
['indication',[498,499,550]],
['receiving',[498,499,550]],
['vatnr',[498,499,562]],
['infourl',[498,499,540]],
['latitude',[498,499,541]],
['longitude',[498,499,543]],
['rooms',[498,499,558]],
['hotelimages',[498,499,528]],
['image',[498,499,528,529,530,531,535,619,620,645,646,647,648,652]],
['height',[498,499,528,529,532,619,620,645,646,649]],
['pixel',[498,499,528,529,532,619,620,645,646,649]],
['picture',[498,499,528,529,532,619,620,645,646,649]],
['width',[498,499,528,529,537,619,620,645,646,654]],
['bytes',[498,499,528,529,535,619,620,645,646,652]],
['currently',[498,499,528,529,531,619,620,645,646,648]],
['base64',[498,499,528,529,531,619,620,645,646,648]],
['encoded',[498,499,528,529,530,619,620,645,646,647]],
['addhotelinfos',[498,499,500]],
['addhotelinfo',[498,499,500,501]],
['resulting',[566,567,575]],
['systems',[566,567,572]],
['internally',[566,567,572]],
['\generalcodes\pricetravellertype',[577,743]],
['unitnr',[577,578,590,598,743,744,758]],
['priceperunit',[577,578,588,743,744,752]],
['totalprice',[577,578,597,743,744,757]],
['pricedescription',[577,578,587,743,744,751]],
['debiaccount',[577,578,582]],
['give',[577,578,593,743,744,754]],
['segment',[577,578,593,743,744,754]],
['turnover',[577,578,593,743,744,754]],
['family',[577,578,593,743,744,754]],
['processing',[577,578,593,743,744,754]],
['amendment',[577,578,593,743,744,754]],
['discount',[577,578,593,743,744,754]],
['tufis',[577,578,593,743,744,754]],
['super',[577,578,593,743,744,754]],
['manual',[577,578,593,743,744,754]],
['profit',[577,578,593]],
['share',[577,578,593]],
['b2b2cfee',[577,578,593]],
['queb',[577,578,593]],
['sending',[577,578,593]],
['pricecommissiongive',[577,578,586]],
['priceposition',[577,578,589,743,744,753]],
['pricereferenceposition',[577,578,590]],
['hidden',[577,578,590]],
['adds',[577,578,590]],
['using',[577,578,590]],
['constuct',[577,578,590]],
['extrapricetype',[577,578,584]],
['further',[577,578,583,584,596]],
['notice',[577,578,583,584,596]],
['vatcode',[577,578,599,743,744,759]],
['vatprintedcode',[577,578,603,743,744,763]],
['umsatzsteuer',[577,578,603,743,744,763]],
['exportlieferung',[577,578,603,743,744,763]],
['dienstleistung',[577,578,603,743,744,763]],
['ausland',[577,578,603,743,744,763]],
['ankaufswert',[577,578,603,743,744,763]],
['occasionen',[577,578,603,743,744,763]],
['sonderregelung',[577,578,603,743,744,763]],
['ausgenommene',[577,578,603,743,744,763]],
['umsätze',[577,578,603,743,744,763]],
['normalsatz',[577,578,603,743,744,763]],
['reduzierter',[577,578,603,743,744,763]],
['satz',[577,578,603,743,744,763]],
['hotelleistung',[577,578,603,743,744,763]],
['entgeltsminderungen',[577,578,603,743,744,763]],
['eigenverbrauch',[577,578,603,743,744,763]],
['bezug',[577,578,603,743,744,763]],
['dienstleistungen',[577,578,603,743,744,763]],
['vorsteuer',[577,578,603,743,744,763]],
['material',[577,578,603,743,744,763]],
['investitionen',[577,578,603,743,744,763]],
['betriebsaufwand',[577,578,603,743,744,763]],
['invest',[577,578,603,743,744,763]],
['betriebsaufw',[577,578,603,743,744,763]],
['landwirtschaft',[577,578,603,743,744,763]],
['nicht',[577,578,603,743,744,763]],
['berechtigt',[577,578,603,743,744,763]],
['keine',[577,578,603,664,665,732,734,743,744,763]],
['vatinternalcode',[577,578,601,743,744,761]],
['vatpercent',[577,578,602,743,744,762]],
['vatdescription',[577,578,600,743,744,760]],
['vatsplits',[577,578,604]],
['vatsplit',[577,578,604,605]],
['vatsplittcode',[577,578,604,605,607]],
['vatsplittprintedcode',[577,578,604,605,609]],
['vatsplittpercent',[577,578,604,605,608]],
['infants',[577,578,585]],
['pricetravellers',[577,578,591]],
['pricetraveller',[577,578,591,592]],
['dossieritemsourceseq',[577,578,583]],
['supplierseq',[577,578,596]],
['workflowcode',[577,578,610]],
['internalpricesubtype',[577,578,612]],
['customerfees',[577,578,611]],
['mealtype',[615,616,618]],
['board',[615,616,617,618]],
['cets-client',[615,616,618]],
['defined',[615,616,618]],
['half',[615,616,618]],
['meals',[615,616,618,765,766,777]],
['according',[615,616,618]],
['program',[615,616,618]],
['other',[615,616,618]],
['mealdesc',[615,616,618]],
['mealdescription',[615,616,617,765,766,776]],
['itinerarytitle',[619,620,639]],
['itinerarydetail',[619,620,638]],
['vouchertitle',[619,620,662]],
['voucherdetail',[619,620,660]],
['supplierinfo',[619,620,658]],
['communication',[619,620,658]],
['sensitive',[619,620,658]],
['nature',[619,620,658]],
['important',[619,620,658]],
['minimumpersons',[619,620,643]],
['maximumpersons',[619,620,641]],
['minimumdays',[619,620,642]],
['minimum',[619,620,642]],
['maximumdays',[619,620,640]],
['misccode',[619,620,644]],
['transf',[619,620,644]],
['excursion',[619,620,644]],
['miscimages',[619,620,645]],
['languange',[619,620,663]],
['itmes',[619,620,663]],
['unitprice',[664,665,741]],
['unit',[664,665,741]],
['quot',[664,665,694]],
['pricebegin',[664,665,728]],
['priceend',[664,665,729]],
['priceperroom',[664,665,731]],
['priceperperson',[664,665,730]],
['numerofpersons',[664,665,725]],
['numberofnights',[664,665,724]],
['additionalnight',[664,665,666]],
['packageprice',[664,665,727]],
['onetimecharge',[664,665,726]],
['chargepernight',[664,665,684]],
['nodiscount',[664,665,723]],
['begindaterelevant',[664,665,667]],
['bookmonday',[664,665,669]],
['booktuesday',[664,665,673]],
['bookwednesday',[664,665,674]],
['bookthursday',[664,665,672]],
['bookfriday',[664,665,668]],
['booksaturday',[664,665,670]],
['booksunday',[664,665,671]],
['priceperway',[664,665,704,709]],
['flightclass',[664,665,704,706]],
['outboundflight',[664,665,704,708]],
['inboundflight',[664,665,704,707]],
['childagefrom',[664,665,685,688]],
['childageto',[664,665,685,689]],
['numberadults',[664,665,685,691]],
['numberchilds',[664,665,685,692]],
['extrachildroom',[664,665,685,690]],
['specialchildprice',[664,665,685,693]],
['bookingbegindate',[664,665,695,696]],
['bookingenddate',[664,665,695,697]],
['tillday',[664,665,695,702]],
['daysfrombookingdate',[664,665,695,698]],
['daystobookingdate',[664,665,695,699]],
['specialcommisionmore',[664,665,715,721]],
['commisionmore',[664,665,715,716]],
['secondweek',[664,665,715,720]],
['seasonchange',[664,665,715,719]],
['perweek',[664,665,715,718]],
['perday',[664,665,715,717]],
['flightonlyarrangement',[664,665,711]],
['specialprice',[664,665,711,714]],
['alwaysspecialprice',[664,665,711,712]],
['priceavailabletill',[664,665,711,713]],
['savingdays',[664,665,735,738]],
['cumulativ',[664,665,735,736]],
['standardcalculationrule',[664,665,735,739]],
['rail',[664,665,732]],
['traincardtype',[664,665,732,734]],
['halbtax',[664,665,732,734]],
['kein',[664,665,732,734]],
['nötig',[664,665,732,734]],
['generalabonement',[664,665,732,734]],
['voller',[664,665,732,734]],
['familienermäsigung',[664,665,732,734]],
['generalabo',[664,665,732,734]],
['klass',[664,665,732,734]],
['hauptstrecke',[664,665,732,734]],
['alle',[664,665,732,734]],
['segmente',[664,665,732,734]],
['empty',[664,665,732,734]],
['railclass',[664,665,732,733]],
['departureterminal',[664,665,675,679]],
['departureterminalkey',[664,665,675,679,680]],
['departureterminalname',[664,665,675,679,681]],
['arrivalterminal',[664,665,675,676]],
['arrivalterminalkey',[664,665,675,676,677]],
['arrivalterminalname',[664,665,675,676,678]],
['oneway',[664,665,675,682]],
['retour',[664,665,675,683]],
['totalpricenetto',[664,665,740]],
['pricesequence',[664,665,742]],
['purchase',[743,744]],
['crediaccount',[743,744,746]],
['invoicenr',[743,744,750]],
['invoicedate',[743,744,749]],
['\meal',[765]],
['singel',[765,766,783]],
['doubleroom',[765,766,783]],
['supliername',[765,766,784]],
['paysupplier',[765,766,781]],
['paysupliername',[765,766,781]],
['vouchersuppliername',[765,766,786]],
['minimaloccupancy',[765,766,778]],
['maximal',[765,766,778]],
['maximaloccupancy',[765,766,775]],
['minimal',[765,766,775]],
['maxadults',[765,766,774]],
['maximun',[765,766,774]],
['apihotelcode',[765,766,767]],
['apiroomcode',[765,766,768]],
['bookingcode',[765,766,769]],
['fsrq',[765,766,769]],
['freesale',[765,766,769]],
['condingent',[765,766,770]],
['hase',[765,766,770]],
['pasivedate',[765,766,780]],
['shipcode',[788,789,815]],
['shipnumber',[788,789,816]],
['mealcode',[788,789,807]],
['harbor',[788,789,792,794,799,802]],
['falsch--',[817,818]],
['internaltype',[817,818,823]],
['quantity',[817,818]],
['element--',[817,818]],
['insurancenr',[817,818,821]],
['internalinsurancecode',[817,818,822]],
['needed',[817,818,822]],
['isinvoicetext',[817,818,828]],
['isitinerarytext',[817,818,829]],
['isbegintext',[817,818,826]],
['isendtext',[817,818,827]],
['isnocostcenter',[817,818,830]],
['traincode',[832,833,860]],
['trainnumber',[832,833,861]]
 ];
 return w;
}
        
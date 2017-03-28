Search.setIndex({docnames:["api_etl","api_etl.extract_api","api_etl.extract_schedule","api_etl.match_ids","api_etl.query_schedule","api_etl.settings","api_etl.utils_api_client","api_etl.utils_dynamo","api_etl.utils_misc","api_etl.utils_mongo","api_etl.utils_rdb","api_etl.utils_secrets","index","modules"],envversion:51,filenames:["api_etl.rst","api_etl.extract_api.rst","api_etl.extract_schedule.rst","api_etl.match_ids.rst","api_etl.query_schedule.rst","api_etl.settings.rst","api_etl.utils_api_client.rst","api_etl.utils_dynamo.rst","api_etl.utils_misc.rst","api_etl.utils_mongo.rst","api_etl.utils_rdb.rst","api_etl.utils_secrets.rst","index.rst","modules.rst"],objects:{"":{api_etl:[0,0,0,"-"]},"api_etl.extract_api":{ApiExtractor:[1,1,1,""],operate_multiple_cycles:[1,3,1,""],operate_one_cycle:[1,3,1,""]},"api_etl.extract_api.ApiExtractor":{extend_data_with_schedule:[1,2,1,""],request_api_for_stations:[1,2,1,""],save_in_dynamo:[1,2,1,""],save_in_mongo:[1,2,1,""]},"api_etl.extract_schedule":{ScheduleExtractor:[2,1,1,""]},"api_etl.extract_schedule.ScheduleExtractor":{build_all_departures:[2,2,1,""],download_gtfs_files:[2,2,1,""],dynamo_save_departures:[2,2,1,""],dynamo_save_departures_and_provision:[2,2,1,""]},"api_etl.query_schedule":{dynamo_extend_items_with_schedule:[4,3,1,""]},"api_etl.utils_api_client":{ApiClient:[6,1,1,""]},"api_etl.utils_api_client.ApiClient":{request_station:[6,2,1,""],request_stations:[6,2,1,""]},"api_etl.utils_dynamo":{RealTimeDeparture:[7,1,1,""],ScheduledDeparture:[7,1,1,""],dynamo_create_real_departures_table:[7,3,1,""],dynamo_extract_whole_table:[7,3,1,""],dynamo_get_client:[7,3,1,""],dynamo_get_table:[7,3,1,""],dynamo_get_table_provisionned_capacity:[7,3,1,""],dynamo_insert_batches:[7,3,1,""],dynamo_submit_batch_getitem_request:[7,3,1,""],dynamo_update_provisionned_capacity:[7,3,1,""]},"api_etl.utils_dynamo.RealTimeDeparture":{DoesNotExist:[7,4,1,""],Meta:[7,1,1,""],data_freshness:[7,5,1,""],date:[7,5,1,""],day_train_num:[7,5,1,""],expected_passage_day:[7,5,1,""],expected_passage_time:[7,5,1,""],miss:[7,5,1,""],request_day:[7,5,1,""],request_time:[7,5,1,""],station_8d:[7,5,1,""],station_id:[7,5,1,""],term:[7,5,1,""],train_num:[7,5,1,""]},"api_etl.utils_dynamo.RealTimeDeparture.Meta":{base_backoff_ms:[7,5,1,""],host:[7,5,1,""],max_retry_attempts:[7,5,1,""],region:[7,5,1,""],request_timeout_seconds:[7,5,1,""],session_cls:[7,5,1,""],table_name:[7,5,1,""]},"api_etl.utils_dynamo.ScheduledDeparture":{DoesNotExist:[7,4,1,""],Meta:[7,1,1,""],arrival_time:[7,5,1,""],block_id:[7,5,1,""],day_train_num:[7,5,1,""],direction_id:[7,5,1,""],drop_off_type:[7,5,1,""],pickup_type:[7,5,1,""],route_id:[7,5,1,""],route_short_name:[7,5,1,""],scheduled_departure_day:[7,5,1,""],scheduled_departure_time:[7,5,1,""],service_id:[7,5,1,""],station_id:[7,5,1,""],stop_headsign:[7,5,1,""],stop_id:[7,5,1,""],stop_sequence:[7,5,1,""],train_num:[7,5,1,""],trip_headsign:[7,5,1,""],trip_id:[7,5,1,""]},"api_etl.utils_dynamo.ScheduledDeparture.Meta":{base_backoff_ms:[7,5,1,""],host:[7,5,1,""],max_retry_attempts:[7,5,1,""],region:[7,5,1,""],request_timeout_seconds:[7,5,1,""],session_cls:[7,5,1,""],table_name:[7,5,1,""]},"api_etl.utils_misc":{api_date_to_day_time_corrected:[8,3,1,""],chunks:[8,3,1,""],compute_delay:[8,3,1,""],get_paris_local_datetime_now:[8,3,1,""],get_responding_stations_from_sample:[8,3,1,""],get_station_ids:[8,3,1,""],set_logging_conf:[8,3,1,""]},"api_etl.utils_mongo":{build_mongo_uri:[9,3,1,""],get_async_mongoclient:[9,3,1,""],get_mongoclient:[9,3,1,""],mongo_async_save_chunks:[9,3,1,""],mongo_async_update_items:[9,3,1,""],mongo_async_upsert_items:[9,3,1,""],mongo_get_async_collection:[9,3,1,""],mongo_get_collection:[9,3,1,""],mongo_move_day_data_to_other_col:[9,3,1,""]},"api_etl.utils_rdb":{build_uri:[10,3,1,""],rdb_connection:[10,3,1,""]},"api_etl.utils_secrets":{get_secret:[11,3,1,""]},api_etl:{extract_api:[1,0,0,"-"],extract_schedule:[2,0,0,"-"],query_schedule:[4,0,0,"-"],settings:[5,0,0,"-"],utils_api_client:[6,0,0,"-"],utils_dynamo:[7,0,0,"-"],utils_misc:[8,0,0,"-"],utils_mongo:[9,0,0,"-"],utils_rdb:[10,0,0,"-"],utils_secrets:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute"},terms:{"0p7zz6ko":[9,11],"24h":8,"2rksy06qftzzn93atokgep9gs92gamr2xw":11,"8outan0":11,"boolean":[1,2,4],"class":[1,2,6,7],"default":[1,4],"function":[1,2,4,7,8,11],"import":8,"int":[1,6,7,8],"new":1,"return":[2,4,6,7,8],"true":[1,2,4],But:12,For:12,The:4,There:2,With:7,about:12,accept:1,advanc:8,after:8,again:12,agenc:4,akiai2fjfgcnmx26rjza:11,alia:7,all:[1,4,5,8,12],alreadi:7,also:[1,12],ani:12,anoth:12,answer:[6,12],api:[1,4,6,8],api_d:8,api_date_to_day_time_correct:8,api_etl:12,api_password:11,api_respons:6,api_transilien:[10,11],api_transilien_us:[10,11],api_us:11,apicli:6,apiextractor:1,applic:12,area:12,around:12,arriv:[4,12],arrival_tim:7,ask:1,asynchron:[6,12],asyncio:[6,12],attr:7,attribut:[1,7],autom:12,avoid:8,aws_access_key_id:11,aws_default_region:11,aws_secret_access_kei:11,base:[1,2,6,7],base_backoff_m:7,basic:12,batch:6,been:2,begin:1,being:1,between:[1,8],bewar:8,block_id:7,broader:12,build:12,build_all_departur:2,build_mongo_uri:9,build_uri:10,built:12,call:12,can:[1,6,8,12],cannot:1,caus:7,choos:8,chunk:8,chunks_list:9,client:[6,7],collect:[4,9],com:6,compute_delai:8,configur:8,contain:[2,4,8,11],content:[7,12,13],convert:8,core:1,core_url:6,correct:8,could:12,creat:7,credenti:7,credit:8,cron:1,csv:[2,12],custom:8,cycl:1,cycle_time_sec:1,d652eueu:[6,11],dai:[8,12],data:[1,2,4,12],data_fold:2,data_fresh:7,databas:[1,2,4,7,9,10,12],datafram:[4,7],date:[7,8],day_field:9,day_stat:7,day_train_num:[4,7],defin:[1,2],del_origin:9,delai:8,depart:12,deploi:12,deprec:1,detail:[4,12],df_format:4,differ:[2,6],digit:[1,6,8],direction_id:7,divid:8,document:12,doesnotexist:7,down:8,download:[2,12],download_gtfs_fil:2,drop_off_typ:7,dure:1,dynamo:[1,2,4,7,9,10,12],dynamo_create_real_departures_t:7,dynamo_extend_items_with_schedul:4,dynamo_extract_whole_t:7,dynamo_get_cli:7,dynamo_get_t:7,dynamo_get_table_provisionned_capac:7,dynamo_insert_batch:7,dynamo_save_departur:2,dynamo_save_departures_and_provis:2,dynamo_submit_batch_getitem_request:7,dynamo_t:2,dynamo_uniqu:1,dynamo_update_provisionned_capac:7,dynamodb:12,each:[1,12],easili:12,either:[6,8],enrich:12,env:11,environ:11,etc:4,etl:12,everi:[1,12],exce:[1,12],except:7,expect:1,expected_passage_dai:[7,8],expected_passage_tim:[7,8],extend:4,extend_data_with_schedul:1,extra_param:6,extract:[1,4,7,11,12],extract_api:[0,12,13],extract_save_st:1,extract_schedul:[0,1,12,13],fals:[1,2,4,6,9,11],faster:12,field:[4,8],file:[2,6,8,11],filter:1,find:[2,4,12],first:[1,2],folder:2,format:[1,2,4,6,8],found:[2,4],from:[1,2,4,8,11],full:4,futur:1,get:[7,8,12],get_async_mongocli:9,get_mongocli:9,get_paris_local_datetime_now:8,get_responding_stations_from_sampl:8,get_secret:11,get_station_id:[1,8],given:[4,7,8],goal:4,gtf:[1,2,6,8],half:1,has:[2,8],hash:7,hash_kei:7,header:2,hello:12,host:[7,9,10],hour:8,how:12,http:[6,12],identifi:6,ids:[6,8],index:[4,12],index_field:9,info:8,inform:[4,12],initi:4,input:4,instanc:12,interact:[7,9,10],item:[1,4,12],item_list:9,item_query_update_list:9,items_kei:7,items_list:[4,7],job:1,json:[4,12],jwelv:11,kei:7,last:2,launch:12,length:1,less:12,level:8,librari:6,limit:[7,12],line:[2,4],link:[2,12],list:[1,4,6,8],load:12,local:8,localhost:[10,11],log:8,log_nam:8,low_afterward:2,made:[1,12],main:[4,12],match:4,max:1,max_delai:9,max_per_minut:1,max_req:7,max_retri:7,max_retry_attempt:7,maximum:[1,7],meta:7,method:6,midnight:8,might:8,min:1,minut:[1,12],miss:7,model:7,modul:[12,13],mongo:[1,4],mongo_al:1,mongo_async_save_chunk:9,mongo_async_update_item:9,mongo_async_upsert_item:9,mongo_db_nam:11,mongo_db_name1:11,mongo_get_async_collect:9,mongo_get_collect:9,mongo_host1:11,mongo_host:11,mongo_move_day_data_to_other_col:9,mongo_password1:11,mongo_password:11,mongo_uniqu:1,mongo_us:11,mongo_user1:11,more:[4,8,12],msg:7,much:12,must:4,my_secret:11,name:[2,7],nearli:8,necessari:8,neg:8,new_col:9,none:[2,6,7,8,9],note:1,number:[1,7,8],object:[1,2,4,6,7,12],old_col:9,one:[8,12],onli:8,oper:[1,8,12],operate_multiple_cycl:1,operate_one_cycl:1,option:12,other:[1,4,8],otherwis:2,our:12,out:12,packag:[12,13],page:12,panda:[4,7],paramat:[1,2],paramet:[1,4,6,7,8],pari:[8,12],pars:1,part:12,pass:[2,12],passag:1,password:[6,9,10],per:1,perform:1,pickup_typ:7,plu:12,port:[9,10],posit:8,postgr:[4,10,12],postgres_db_nam:11,postgres_host:11,postgres_password:11,postgres_us:11,predict:[4,12],prev_resp:7,previou:8,previous:1,primari:4,problem:12,process:[2,6],project:[5,12],provid:[1,4,6,12],provis:7,purpos:8,pynamodb:7,queri:[1,4,6,8,12],query_schedul:[0,1,12,13],rang:7,range_kei:7,raw_respons:1,rdb_connect:10,read:7,read_off:2,read_on:2,real:4,real_departur:[8,12],real_departure_tim:8,real_departures_2:7,real_tim:8,realtimedepartur:7,receiv:12,region:7,regroup:5,relat:[2,12],relev:4,reli:6,repositori:12,request:[1,6,7,12],request_api_for_st:1,request_dai:7,request_st:6,request_tim:7,request_timeout_second:7,requir:1,respond:8,respons:1,retry_timeout:6,right:2,root:[9,11],rout:4,route_id:7,route_short_nam:7,run:1,salt:12,same:8,sampl:8,sample_loc:8,save:[1,2,12],save_in_dynamo:1,save_in_mongo:1,schedul:[1,2,4,8],schedule_url:2,scheduled_departur:[4,7,12],scheduled_departure_dai:7,scheduled_departure_tim:[4,7,8],scheduleddepartur:7,scheduleextractor:2,search:12,second:[1,2,8,12],secret:11,send:[4,12],serializ:[4,12],service_id:7,session:7,session_cl:7,set:[0,1,2,4,7,8,11,13],set_logging_conf:8,should:12,singl:[6,12],size:8,slower:12,sncf:2,some:[8,12],spend:8,station:[1,6,8,12],station_8d:7,station_filt:1,station_id:[4,6,7],station_list:6,step:[1,2,4],stop:4,stop_headsign:7,stop_id:7,stop_sequ:7,stop_time_sec:1,str:[1,6,7,8],string:[1,8],submodul:[12,13],tabl:[1,4,7],table_nam:7,take:[1,4,12],term:7,test:8,than:[6,8,12],thank:12,thei:4,them:4,thi:[1,2,4,6,7,8,11,12],those:12,thread:12,through:12,throughput:7,time:[1,4,8],time_or_dai:8,tnhtn537:[6,11],todo:8,tool:12,train:[1,2,4,12],train_num:[4,7],transform:[8,12],transilien:[1,4,6,11],trip:12,trip_headsign:7,trip_id:[4,7,12],tupl:[1,6],two:[1,2,8,12],type:[2,4,6,7],unicod:7,uniqu:1,unnecessari:8,until:1,unzip:2,updat:[1,4,7],url:2,usabl:8,usag:1,use:[1,2],used:[2,4,6,7,8,9,10],useful:[4,8],user:[6,9,10],using:1,usual:2,utils_api_cli:[0,1,12,13],utils_dynamo:[0,1,12,13],utils_misc:[0,12,13],utils_mongo:[0,1,13],utils_rdb:[0,13],utils_secret:[0,13],vagrant:12,valu:8,verbos:6,vsjc3ebl6c:[10,11],want:[4,6,8],warn:6,websit:2,well:2,west:[7,11],what:[4,12],when:12,which:[1,2,4,12],without:12,work:12,write:[7,8],write_loc:8,write_off:2,write_on:2,xml:[6,12],yield:8,you:[4,6,8],yyyymmdd:2,yyyymmdd_dai:9,zip:2,zone:8},titles:["api_etl package","api_etl.extract_api module","api_etl.extract_schedule module","api_etl.match_ids module","api_etl.query_schedule module","api_etl.settings module","api_etl.utils_api_client module","api_etl.utils_dynamo module","api_etl.utils_misc module","api_etl.utils_mongo module","api_etl.utils_rdb module","api_etl.utils_secrets module","Overview","api_etl"],titleterms:{api:12,api_etl:[0,1,2,3,4,5,6,7,8,9,10,11,13],content:0,departur:12,extract_api:1,extract_schedul:2,format:12,from:12,gtf:12,indic:12,match_id:3,modul:[0,1,2,3,4,5,6,7,8,9,10,11],overview:12,packag:0,perform:12,query_schedul:4,real:12,schedul:12,set:5,sncf:12,submodul:0,tabl:12,task:12,time:12,transilien:12,utils_api_cli:6,utils_dynamo:7,utils_misc:8,utils_mongo:9,utils_rdb:10,utils_secret:11,websit:12}})
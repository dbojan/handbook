"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"reservation",title:"Reservation System setup",sidebar_label:"Reservation System"},l=void 0,c={unversionedId:"devops-guide/reservation",id:"devops-guide/reservation",title:"Reservation System setup",description:"Support for a reservation system over REST API",source:"@site/docs/devops-guide/reservation.md",sourceDirName:"devops-guide",slug:"/devops-guide/reservation",permalink:"/handbook/docs/devops-guide/reservation",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/reservation.md",tags:[],version:"current",lastUpdatedAt:1658999691,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{id:"reservation",title:"Reservation System setup",sidebar_label:"Reservation System"},sidebar:"docs",previous:{title:"Scalable setup",permalink:"/handbook/docs/devops-guide/devops-guide-scalable"},next:{title:"TURN setup",permalink:"/handbook/docs/devops-guide/turn"}},p={},d=[{value:"Support for a reservation system over REST API",id:"support-for-a-reservation-system-over-rest-api",level:3},{value:"Enable reservation system",id:"enable-reservation-system",level:4},{value:"Call flow",id:"call-flow",level:4},{value:"Notes",id:"notes",level:5},{value:"Conference allocation",id:"conference-allocation",level:5},{value:"HTTP 200 or 201 Conference created successfully",id:"http-200-or-201-conference-created-successfully",level:6},{value:"HTTP 409 - Conference already exists",id:"http-409---conference-already-exists",level:6},{value:"HTTP 4xx",id:"http-4xx",level:6},{value:"Reading conference info",id:"reading-conference-info",level:5},{value:"Deleting conference",id:"deleting-conference",level:5},{value:"Implementation diagram",id:"implementation-diagram",level:4}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"support-for-a-reservation-system-over-rest-api"},"Support for a reservation system over REST API"),(0,a.kt)("p",null,"It is possible to connect to an external conference reservation system using a\nREST API. Before a new Jitsi Meet conference is created, the reservation system will be\nqueried for room availability. The system is supposed to return a positive or\nnegative response code, which also contains conference duration. Prosody will enforce\nconference duration and if the time limit is exceeded the conference will be\nterminated."),(0,a.kt)("h4",{id:"enable-reservation-system"},"Enable reservation system"),(0,a.kt)("p",null,'In order to enable the reservation system, the URL base for the REST API endpoint must be\nconfigured. Under the main virtual host in prosody, enable module "reservations" and\nadd the config ',(0,a.kt)("inlineCode",{parentName:"p"},"reservations_api_prefix"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'VirtualHost "jitmeet.example.com"\n    -- ....\n    modules_enabled = {\n        -- ....\n        "reservations";\n    }\n    reservations_api_prefix = "http://reservation.example.com"\n')),(0,a.kt)("p",null,"The URL base is used to construct the request URL. Currently, only ",(0,a.kt)("inlineCode",{parentName:"p"},"'/conference'"),"\nendpoint is supported, so all request will go to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://reservation.example.com/conference\n")),(0,a.kt)("p",null,"Additional configuration options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"reservations_api_timeout" to change API call timeouts (defaults to 20 seconds)'),(0,a.kt)("li",{parentName:"ul"},'"reservations_api_headers" to specify custom HTTP headers included in\nall API calls e.g. to provide auth tokens.'),(0,a.kt)("li",{parentName:"ul"},'"reservations_api_retry_count" to specify the number of times API call failures are retried (defaults to 3)'),(0,a.kt)("li",{parentName:"ul"},'"reservations_api_retry_delay" seconds to wait between retries (defaults to 3s)'),(0,a.kt)("li",{parentName:"ul"},'"reservations_api_should_retry_for_code" as a function that takes an HTTP response code and\nreturns true if the API call should be retried. By default, retries are done for 5XX\nresponses. Timeouts are never retried, and HTTP call failures are always retried.'),(0,a.kt)("li",{parentName:"ul"},'"reservations_enable_max_occupants" to enable integration with mod_muc_max_occupants. If this is set to ',(0,a.kt)("inlineCode",{parentName:"li"},"true"),', and if\nthe API response payload includes a "max_occupants" value, then that value will be set as the max occupancy limit\nfor that specific room.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    --- The following are all optional\n    reservations_api_headers = {\n        ["Authorization"] = "Bearer TOKEN-237958623045";\n    }\n    reservations_api_timeout = 10  -- timeout if API does not respond within 10s\n    reservations_api_retry_count = 5  -- retry up to 5 times\n    reservations_api_retry_delay = 1  -- wait 1s between retries\n    reservations_api_should_retry_for_code = function (code)\n        return code >= 500 or code == 408\n    end\n')),(0,a.kt)("h4",{id:"call-flow"},"Call flow"),(0,a.kt)("h5",{id:"notes"},"Notes"),(0,a.kt)("p",null,"All API calls use the following datetime format:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd'T'HH:mm:ss.SSSX")," - more info can be found in\n",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleDateFormat")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html"},"JavaDoc")),(0,a.kt)("h5",{id:"conference-allocation"},"Conference allocation"),(0,a.kt)("p",null,"When the first user joins a MUC room (i.e. Jitsi Meet URL is opened), an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP POST"),"\nrequest is sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"'/conference'")," endpoint with the following parameters\nincluded:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name (string)")," - short name of the conference room (not full MUC address). If tenant is used, the name will be ",(0,a.kt)("inlineCode",{parentName:"li"},"[tenant]roomname"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start_time (string)")," - conference start date and time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mail_owner (string)")," - if authentication system is enabled this field will\ncontain user's identity. It that case it will not be possible to create a new\nconference room without authenticating.")),(0,a.kt)("p",null,"The payload sent to the endpoint will be encoded as ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,a.kt)("p",null,"The reservation system is expected to respond with one of the following\nresponses:"),(0,a.kt)("h6",{id:"http-200-or-201-conference-created-successfully"},"HTTP 200 or 201 Conference created successfully"),(0,a.kt)("p",null,"In the HTTP response, a JSON object is expected. It should contain conference ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\nassigned by the system and ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," measured in seconds. Sample response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  'id': 364758328,\n  'name': 'conference1234',\n  'mail_owner': 'user@server.com',\n  'start_time': '2048-04-20T17:55:12.000Z',\n  'duration': 900000\n}\n")),(0,a.kt)("p",null,"The object can optionally include a ",(0,a.kt)("inlineCode",{parentName:"p"},"max_occupants")," key with an integer value. When provided, and if\n",(0,a.kt)("inlineCode",{parentName:"p"},"reservations_enable_max_occupants")," is enabled, then the value will be passed to muc_mod_max_occupants to enforce\nper-room occupancy limits."),(0,a.kt)("h6",{id:"http-409---conference-already-exists"},"HTTP 409 - Conference already exists"),(0,a.kt)("p",null,"This is to recover from previous failures. If for some reason the conference was\nrestarted and the user tries to create the room again, this response informs Prosody\nthat the conference room already exists. It is expected to contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"conflict_id")," in the JSON response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  'conflict_id': 364758328\n}\n")),(0,a.kt)("p",null,"Prosody will use ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP GET")," to fetch information about the conflicting conference for the\ngiven ",(0,a.kt)("inlineCode",{parentName:"p"},"conflict_id"),'. More info about this request can be found in the "Reading conference info"\nsection.'),(0,a.kt)("h6",{id:"http-4xx"},"HTTP 4xx"),(0,a.kt)("p",null,"Other response codes will cause conference creation failure. The JSON response\ncan contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," object which will be sent back to the client."),(0,a.kt)("p",null,"For example ",(0,a.kt)("inlineCode",{parentName:"p"},"user1")," tries to start a new conference by sending\n",(0,a.kt)("inlineCode",{parentName:"p"},"conference")," IQ to Jicofo. The system will reject the request."),(0,a.kt)("p",null,"Client -> Jicofo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<iq from='client1@xmpp.com' to='jicofo.meet.com' type='set'>\n  <conference xmlns='http://jitsi.org/protocol/focus' room='testroom1' />\n</iq>\n")),(0,a.kt)("p",null,"Prosody -> Reservation system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /conference HTTP/1.1\ncontent-type:application/x-www-form-urlencoded;charset=utf-8\nhost: http://reservation.example.com\ncontent-length: length\n\nname=testroom1&start_time=2048-04-20T17%3A55%3A12.000Z&mail_owner=client1%40xmpp.com\n")),(0,a.kt)("p",null,"Reservation system -> Prosody:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 403 Forbidden\nContent-Type: application/json; charset=utf-8\nContent-Length: length\n\n{\n  'message': 'client1 is not allowed to create the room at this time'\n}\n")),(0,a.kt)("p",null,"Prosody -> Client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<iq from='jicofo.meet.com' to='client1@xmpp.com' type='error'>\n  <error type='cancel'>\n    <service-unavailable xmlns='urn:ietf:params:xml:ns:xmpp-stanzas' />\n    <text xmlns='urn:ietf:params:xml:ns:xmpp-stanzas'>\n          client1 is not allowed to create the room at this time\n    </text>\n    <reservation-error xmlns='http://jitsi.org/protocol/focus' error-code='403'/>\n  </error>\n</iq>\n")),(0,a.kt)("p",null,"The application can use ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reservation-error")," elements to\nprovide meaningful information to the user."),(0,a.kt)("h5",{id:"reading-conference-info"},"Reading conference info"),(0,a.kt)("p",null,"In case of a ",(0,a.kt)("inlineCode",{parentName:"p"},"409")," response to the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP POST")," request, Prosody will try\nto read information about the conflicting conference using an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP GET"),"\n'/conference/{conflict_id}' endpoint. The response should provide all\ninformation about the conference stored in the reservation system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'id'"),": conference identifier assigned by the reservation system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'name'"),": conference room name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'mail_owner'"),": identity of the user who has created the conference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'start_time'"),": conference start date and time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'duration'"),": scheduled conference duration in seconds")),(0,a.kt)("p",null,"The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"max_occupants")," value should also be provided if applicable."),(0,a.kt)("p",null,"Sample response JSON body (contains the same info as ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")," to\n",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP POST"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  'id': 364758328,\n  'name': 'conference1234',\n  'mail_owner': 'user@server.com',\n  'start_time': '2048-04-20T17:55:12.000Z',\n  'duration': 900000\n}\n")),(0,a.kt)("h5",{id:"deleting-conference"},"Deleting conference"),(0,a.kt)("p",null,"Prosody deletes conferences in the reservation system in two cases. First when\nall users leave XMPP Multi User Chat room. Secondly when the conference duration limit\nis exceeded. In the latter case Prosody will destroy the XMPP MUC room.\nAfter the MUC room is destroyed, Prosody sends an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP DELETE")," request to\n",(0,a.kt)("inlineCode",{parentName:"p"},"'/conference/{id}'")," endpoint where ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," is replaced with\nconference identifier assigned by the reservation system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DELETE /conference/364758328 HTTP/1.1\nhost: http://reservation.example.com\n...\n")),(0,a.kt)("h4",{id:"implementation-diagram"},"Implementation diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/reservation-api.png",alt:null})))}u.isMDXComponent=!0}}]);
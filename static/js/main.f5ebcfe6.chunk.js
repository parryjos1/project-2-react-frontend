(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(90)},49:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(19),l=a.n(s);a(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(2),i=a(13),c=a(16),m=a(3),u=a(4),h=a(6),p=a(5),d=a(17),g=a(7),b=a(1),E=a.n(b),v=a(40),f=a.n(v),y=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).searchListings=function(t){return console.log("the polygon is: ".concat(e.props.polygonDrawn)),E.a.post("https://api.domain.com.au/v1/listings/residential/_search",{listingType:"Sale",minBedrooms:e.props.bedrooms,minBathrooms:e.props.bathrooms,maxPrice:e.props.maxPrice,geoWindow:{polygon:{points:e.props.polygonDrawn}}},{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){var a=t.data;console.log("hello array:",a),e.setState({propertyResults:a}),e.props.selectedPropCallBack(a)}).catch(function(e){return console.error(e.response.data)})},e.state={showComponent:!1,propertyResults:""},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("the polygon token is: this: ".concat(this.props.polygonDrawn)),console.log("the domain token is: this: ".concat(this.props.domainToken.data));var e=this.props.domainToken.data;this.searchListings(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"component"},this.state.propertyResults.length>0?this.state.propertyResults.map(function(e){return o.a.createElement(r.b,{to:"/listing/".concat(e.listing.id)},o.a.createElement("div",{className:"listings"},o.a.createElement("div",{key:e.listing.id,className:"listings-left"},e.listing.propertyDetails.displayableAddress),o.a.createElement("div",{className:"listings-right"},o.a.createElement("img",{src:e.listing.media[0].url})),o.a.createElement("br",null)))}):o.a.createElement("p",null,"propertyResults is still empty"))}}]),t}(n.Component),k=(n.Component,function(e){var t=e.text;return o.a.createElement("div",null,t)}),w="AIzaSyBiyyQ1k_u59uBNClXpsolgBwdT3B6iURY";console.log("API KEY",w,Object({NODE_ENV:"production",PUBLIC_URL:"/find-homes-react-frontend",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyBiyyQ1k_u59uBNClXpsolgBwdT3B6iURY"}));var O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).getDomainToken=function(){var e=E.a.get("https://find-homes.herokuapp.com/domain_token").then(function(e){console.log("The result is: ".concat(e)),a.setState({domain_token:e.data})});return console.log("railsDomainTokenRequest is: ".concat(e)),e},a.handleApiLoaded=function(e){var t=e.map,n=e.maps;console.log("LOADED",t,n),a.setState({map:t,maps:n})},a.freeDrawMouseDown=function(){var e=new a.state.maps.Polyline({map:a.state.map,clickable:!1}),t=a.state.maps.event.addListener(a.state.map,"mousemove",function(t){e.getPath().push(t.latLng)}),n=Object(d.a)(a);a.state.maps.event.addListenerOnce(a.state.map,"mouseup",function(a){n.state.maps.event.removeListener(t);var o=e.getPath();e.setMap(null);var s=function(e,t){var a,n,o,s,l,r,i,c,m,u,h,p,d,g,b,E,v,f,y=Math.PI/180*.5,k=new Array,w=new Array,O=new Array;if(e.length<3)return e;for(a=e.length,m=360*t/(2*Math.PI*6378137),m*=m,o=0,w[0]=0,O[0]=a-1,n=1;n>0;)if(s=w[n-1],l=O[n-1],n--,l-s>1){for(u=e[l].lng()-e[s].lng(),h=e[l].lat()-e[s].lat(),Math.abs(u)>180&&(u=360-Math.abs(u)),p=(u*=Math.cos(y*(e[l].lat()+e[s].lat())))*u+h*h,C=s+1,r=s,c=-1;C<l;C++)d=e[C].lng()-e[s].lng(),g=e[C].lat()-e[s].lat(),Math.abs(d)>180&&(d=360-Math.abs(d)),b=(d*=Math.cos(y*(e[C].lat()+e[s].lat())))*d+g*g,E=e[C].lng()-e[l].lng(),v=e[C].lat()-e[l].lat(),Math.abs(E)>180&&(E=360-Math.abs(E)),(i=b>=p+(f=(E*=Math.cos(y*(e[C].lat()+e[l].lat())))*E+v*v)?f:f>=p+b?b:(d*h-g*u)*(d*h-g*u)/p)>c&&(r=C,c=i);c<m?(k[o]=s,o++):(w[++n-1]=r,O[n-1]=l,w[++n-1]=s,O[n-1]=r)}else k[o]=s,o++;k[o]=a-1,o++;for(var j=new Array,C=0;C<o;C++)j.push(e[k[C]]);return j}(o.j,50);console.log("ArrayforPolygontoUse",s);var l=s.map(function(e){return{lat:e.lat(),lon:e.lng()}});n.setState({searchAreaPath:l}),console.log("path",l);var r={map:n.state.map,fillColor:"#0099FF",fillOpacity:.7,strokeColor:"#AA2143",strokeWeight:2,clickable:!1,zIndex:1,path:s,editable:!1};e=new n.state.maps.Polygon(r),n.state.maps.event.clearListeners(n.state.map.getDiv(),"mousedown"),n.state.map.setOptions({draggable:!0,zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0})})},a.freeDraw=function(e){a.state.map.setOptions({draggable:!1,zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!1}),a.state.maps.event.addDomListener(a.state.map.getDiv(),"mousedown",a.freeDrawMouseDown)},a.selectedPropCallBack=function(e){console.log("~~~~e is: ".concat(e)),a.setState({selectedPropertyLocations:e})},a.state={map:null,maps:null,searchAreaPath:[],domain_token:"",selectedPropertyLocations:[],bedrooms:0,bathrooms:0,max_price:1e8,suburb:""},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){this.getDomainToken()}},{key:"submitForm",value:function(e){e.preventDefault(),this.props.history.push({pathname:"/searchlistings",state:{bedrooms:this.state.bedrooms,bathrooms:this.state.bathrooms,max_price:this.state.max_price,suburb:this.state.suburb,domainToken:this.state.domain_token.data}})}},{key:"render",value:function(){return o.a.createElement("div",{style:{height:"100vh",width:"90%"}},o.a.createElement("form",{onSubmit:this.submitForm.bind(this),bedrooms:this.state.bedrooms},o.a.createElement("label",null,"Search Suburb:",o.a.createElement("input",{type:"text",name:"suburb",value:this.state.value,placeholder:" 'Glebe'",onChange:this.handleChange.bind(this)})),o.a.createElement("input",{type:"submit",value:"Search"})),o.a.createElement("div",null,o.a.createElement("label",null,"Min Bedrooms:",o.a.createElement("select",{value:this.state.bedrooms,name:"bedrooms",onChange:this.handleChange.bind(this)},o.a.createElement("option",{value:"0"},"0"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"))),o.a.createElement("label",null,"Min Bathrooms:",o.a.createElement("select",{value:this.state.bathrooms,name:"bathrooms",onChange:this.handleChange.bind(this)},o.a.createElement("option",{value:"0"},"0"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"))),o.a.createElement("label",null,"Max Price:",o.a.createElement("select",{value:this.state.max_price,name:"max_price",onChange:this.handleChange.bind(this)},o.a.createElement("option",{value:""},"-"),o.a.createElement("option",{value:"1000000"},"1,000,000"),o.a.createElement("option",{value:"2000000"},"2,000,000"),o.a.createElement("option",{value:"3000000"},"3,000,000"),o.a.createElement("option",{value:"5000000"},"5,000,000")))),o.a.createElement("button",{onClick:this.freeDraw},"Draw area"),o.a.createElement(f.a,{bootstrapURLKeys:{key:w},defaultCenter:this.props.center,defaultZoom:this.props.zoom,onGoogleApiLoaded:this.handleApiLoaded},this.state.selectedPropertyLocations.length>0?this.state.selectedPropertyLocations.map(function(e){return o.a.createElement(k,{lat:e.listing.propertyDetails.latitude,lng:e.listing.propertyDetails.longitude,text:o.a.createElement(r.b,{to:"/listing/".concat(e.listing.id)},o.a.createElement("strong",null,"X"))})}):o.a.createElement("p",null)),this.state.searchAreaPath.length>0?o.a.createElement(y,{polygonDrawn:this.state.searchAreaPath,domainToken:this.state.domain_token,selectedPropCallBack:this.selectedPropCallBack,bedrooms:this.state.bedrooms,bathrooms:this.state.bathrooms,maxPrice:this.state.max_price}):o.a.createElement("p",null,"Select an area on the map to search"))}}]),t}(n.Component);O.defaultProps={center:{lat:-33.8708,lng:151.2073},zoom:15};var j="",C="",L="",P=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).handleInputEmail=function(e){e.persist(),j=e.target.value},e.handleInputPassword=function(e){e.persist(),C=e.target.value},e.handleSubmit=function(t){t.preventDefault(),console.log(j),console.log(C),E.a.post("https://find-homes.herokuapp.com/user_token",{auth:{email:j,password:C}}).then(function(t){L=t.data.jwt,console.log(L),localStorage.setItem("userToken",L),e.props.history.push("/wishlist")}).catch(function(t){e.setState({errorMessage:"Invalid email or password"})})},e.state={errorMessage:""},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return o.a.createElement("div",{className:"component"},o.a.createElement("h1",null,"Log in"),o.a.createElement("div",{style:{color:"red"}},this.state.errorMessage),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Your email",onChange:this.handleInputEmail}),o.a.createElement("br",null),o.a.createElement("input",(e={type:"text",placeholder:"Password"},Object(c.a)(e,"type","password"),Object(c.a)(e,"onChange",this.handleInputPassword),e)),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Log In"})))}}]),t}(n.Component),S=a(43),D=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).getWishList=function(){E.a.get("https://find-homes.herokuapp.com/wishlists",{headers:{Authorization:"Bearer "+localStorage.getItem("userToken")}}).then(function(t){e.setState({listings:t.data.listings,name:t.data.name})}).catch(function(e){console.log(e)})},e.deleteListing=function(t,a){E.a.delete("https://find-homes.herokuapp.com/wishlists/"+t,{headers:{Authorization:"Bearer "+localStorage.getItem("userToken")}}).then(function(t){console.log(t);var n=Object(S.a)(e.state.listings);n.splice(a,1),e.setState({listings:n})}).catch(function(e){console.log(e)})},e.state={listings:[]},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getWishList()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"component"},o.a.createElement("h2",null,"Welcome, ",this.state.name," "),o.a.createElement("div",null,this.state.listings.length>0?this.state.listings.map(function(t,a){return o.a.createElement("div",{key:t.id,className:"listings"},o.a.createElement(r.b,{to:"/listing/".concat(t.domain_id)},o.a.createElement("div",{className:"listings-left"},o.a.createElement("p",null,o.a.createElement("strong",null,t.headline)),o.a.createElement("p",null,t.address))),o.a.createElement("div",{className:"listings-right"},o.a.createElement(r.b,{to:"/listing/".concat(t.domain_id)},o.a.createElement("img",{src:t.image})),o.a.createElement("button",{onClick:function(){return e.deleteListing(t.id,a)}}," Delete")))}):o.a.createElement("p",null,"loading")))}}]),t}(n.Component),A=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).addListing=function(e,t,a,n,o,s){E.a.post("https://find-homes.herokuapp.com/wishlists/",{domainId:e,address:t,image:a,headline:n,latitude:o,longitude:s},{headers:{Authorization:"Bearer "+localStorage.getItem("userToken")}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},e.getDomainTokenAndFetchListing=function(t){E.a.get("https://find-homes.herokuapp.com/domain_token").then(function(a){console.log("The domain token is:",a.data.data);var n=a.data.data;e.getListingById(t,n)})},e.getListingById=function(t,a){return E.a.get("https://api.domain.com.au/v1/listings/".concat(t),{headers:{Authorization:"Bearer ".concat(a)}}).then(function(t){console.log(t.data),e.setState({listing:t.data,listingImages:t.data.media,price:t.data.priceDetails.displayPrice,address:t.data.addressParts.displayAddress})}).catch(function(e){return console.error(e)})},e.state={listing:{},listingImages:[],price:"",address:""},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getDomainTokenAndFetchListing(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"component"},o.a.createElement("button",{onClick:function(){return e.addListing(e.state.listing.id,e.state.listing.addressParts.displayAddress,e.state.listingImages[0].url,e.state.listing.headline,e.state.listing.geoLocation.latitude,e.state.listing.geoLocation.longitude)}},"Add This house"),o.a.createElement("h2",null,this.state.listing.headline),o.a.createElement("h3",null,this.state.address),o.a.createElement("p",null,o.a.createElement("strong",null,"Bathrooms"),": ",this.state.listing.bathrooms),o.a.createElement("p",null,o.a.createElement("strong",null,"Bedrooms"),": ",this.state.listing.bedrooms),o.a.createElement("p",null,o.a.createElement("strong",null,"Car spaces"),": ",this.state.listing.carspaces),o.a.createElement("p",null,o.a.createElement("strong",null,"Price"),": ",this.state.price),this.state.listingImages.length>0?this.state.listingImages.map(function(e,t){return o.a.createElement("img",{className:"show-images",key:t,src:e.url})}):o.a.createElement("p",null,"loading"),o.a.createElement("p",null,this.state.listing.description))}}]),t}(n.Component),I="",_=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).handleInputName=function(t){t.persist(),e.setState({name:t.target.value})},e.handleInputEmail=function(t){t.persist(),e.setState({email:t.target.value})},e.handleInputPassword=function(t){t.persist(),e.setState({password:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.createUser()},e.createUser=function(){E.a.post("https://find-homes.herokuapp.com/user",{user:{name:e.state.name,email:e.state.email,password:e.state.password}}).then(function(t){console.log(t),e.getToken()}).catch(function(t){console.log(t),console.log(t.response.data.errors),e.setState({errorMessage:t.response.data.errors})})},e.getToken=function(){E.a.post("https://find-homes.herokuapp.com/user_token",{auth:{email:e.state.email,password:e.state.password}}).then(function(t){I=t.data.jwt,console.log(I),localStorage.setItem("userToken",I),e.props.history.push("/wishlist")}).catch(function(e){console.log(e)})},e.state={name:"",email:"",password:"",errorMessage:[]},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"component"},o.a.createElement("h1",null,"Create a new account"),o.a.createElement("div",{style:{color:"red"}},o.a.createElement("ul",null,this.state.errorMessage.map(function(e){return o.a.createElement("li",null,e)}))),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Your name",onChange:this.handleInputName}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Email",onChange:this.handleInputEmail}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.handleInputPassword}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Create new account"})))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).updateState=function(){e.setState({domainToken:e.props.history.location.state.domainToken,bedrooms:e.props.history.location.state.bedrooms,bathrooms:e.props.history.location.state.bathrooms,max_price:e.props.history.location.state.max_price,suburb:e.props.history.location.state.suburb})},e.searchListings=function(t){console.log("the access token is: ".concat(t));var a=e.state.domainToken;return console.log("tk isssss: ".concat(a)),E.a.post("https://api.domain.com.au/v1/listings/residential/_search",{minBedrooms:e.state.bedrooms,minBathrooms:e.state.bathrooms,maxPrice:e.state.max_price,locations:[{suburb:e.state.suburb}]},{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){var a=t.data;console.log("hello array: searchedShowListings",a),e.setState({propertyResults:a})}).catch(function(e){return console.error(e.response.data)})},e.state={propertyResults:"",domainToken:""},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.updateState()}},{key:"componentDidMount",value:function(){this.searchListings(this.state.domainToken)}},{key:"render",value:function(){return o.a.createElement("div",{className:"component"},o.a.createElement("h1",null,"Listings"),o.a.createElement("div",null,this.state.propertyResults.length>0?this.state.propertyResults.map(function(e){return o.a.createElement(r.b,{to:"/listing/".concat(e.listing.id)},o.a.createElement("div",{className:"listings"},o.a.createElement("div",{key:e.listing.id,className:"listings-left"},e.listing.propertyDetails.displayableAddress),o.a.createElement("div",{className:"listings-right"},o.a.createElement("img",{src:e.listing.media[0].url})),o.a.createElement("br",null)))}):o.a.createElement("p",null,"Loading...")))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).logOut=function(){console.log("hello"),localStorage.removeItem("userToken"),a.props.history.push("/")},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Find Homes"),o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("ul",{id:"nav-list"},o.a.createElement("li",null,o.a.createElement(r.b,{to:"/"},"Find homes")),"|",localStorage.getItem("userToken")?o.a.createElement("div",null,o.a.createElement("li",null,o.a.createElement("button",{onClick:this.logOut},"Log out")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/wishlist"},"Wishlist"))):o.a.createElement("div",null,o.a.createElement("li",null,o.a.createElement(r.b,{to:"/login"},"Log in")),"|",o.a.createElement("li",null,o.a.createElement(r.b,{to:"/create_account"},"Create Account"))))))}}]),t}(n.Component),T=o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{path:"/",component:M}),o.a.createElement(i.a,{exact:!0,path:"/",component:O}),o.a.createElement(i.a,{exact:!0,path:"/login",component:P}),o.a.createElement(i.a,{exact:!0,path:"/create_account",component:_}),o.a.createElement(i.a,{exact:!0,path:"/wishlist",component:D}),o.a.createElement(i.a,{exact:!0,path:"/listing/:id",component:A}),o.a.createElement(i.a,{exact:!0,path:"/searchlistings",component:B})));l.a.render(T,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.f5ebcfe6.chunk.js.map
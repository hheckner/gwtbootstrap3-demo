$wnd.GwtBootstrap3Demo.runAsyncCallback40("function sRc(){}\nfunction tRc(){tRc=wgb;qRc=new sRc}\nfunction pRc(){this.a=(tRc(),qRc);rRc(this.a)}\nfunction lxc(a){_wb.call(this,a);jxc(this)}\nfunction iRc(a,b,c){gHb();EHb.call(this,a,b,c,(Gxc(),Fxc))}\nfunction aWc(a){var b;if(!a.M){b=new oRc;a.M=b}return a.M}\nfunction _Vc(a){var b,c;if(!a.L){c=new iRc(IGb(iIb(a.a)),(b=aWc(a),b),$Vc(a));$Gb((lIb(a.a),c),xIb(lIb(a.a)));a.L=c}return a.L}\nfunction rRc(a){if(!a.a){a.a=true;Ow();Qw((RC(),'.GBG2FFLDGM{background-color:#fcf2f2;border-color:#dfb5b4;}.GBG2FFLDHM{margin-top:0 !important;}.GBG2FFLDIM{margin-left:5px;}'));return true}return false}\nfunction oRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;WHb.call(this);UHb(this,(new pRc,a=new $4b,UZb(a,(b=new B0b(ELd),UZb(b,(c=new Q3b,c.a='Offline',P3b(c),c)),UZb(b,(d=new j_b,UZb(d,(e=new n1b((Ndc(),Kdc)),Gjb((frb(),e.eb),'GBG2FFLDHM',true),Bxc(e.b,NRd),VZb(e,e.b,0),e)),UZb(d,new vxc((f=new VNb,f.a+='To use Offline, you must first add the extras module to your project. In Maven:',new vhb(f.a)).a)),UZb(d,(g=new N_c,O4b(g,(l=new VNb,l.a+=ORd,new vhb(l.a)).a),Gjb(g.eb,JLd,true),g)),UZb(d,new vxc((h=new VNb,h.a+=PRd,new vhb(h.a)).a)),UZb(d,(i=new N_c,O4b(i,(m=new VNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new vhb(m.a)).a),Gjb(i.eb,JLd,true),i)),Gjb(d.eb,'GBG2FFLDGM',true),d)),UZb(b,(j=new d4b,UZb(j,(n=new k4b,UZb(n,(o=new n1b(Jdc),Bxc(o.b,'What is Offline?'),VZb(o,o.b,0),o)),n)),UZb(j,(p=new f4b,UZb(p,new lxc((q=new VNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new vhb(q.a)).a)),p)),UZb(j,new h4b),j)),UZb(b,(k=new d4b,UZb(k,(r=new k4b,UZb(r,(s=new n1b(Jdc),Bxc(s.b,'How to configure?'),VZb(s,s.b,0),s)),r)),UZb(k,(t=new f4b,UZb(t,new vxc((u=new VNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new vhb(u.a)).a)),UZb(t,(v=new N_c,O4b(v,(w=new VNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new vhb(w.a)).a),Gjb(v.eb,JLd,true),v)),UZb(t,new vxc((A=new VNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new vhb(A.a)).a)),UZb(t,(B=new N_c,O4b(B,(C=new VNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new vhb(C.a)).a),Gjb(B.eb,JLd,true),B)),UZb(t,new vxc((D=new VNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new vhb(D.a)).a)),UZb(t,(F=new N_c,O4b(F,(G=new VNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new vhb(G.a)).a),Gjb(F.eb,JLd,true),F)),t)),UZb(k,new h4b),k)),b)),a))}\nvgb(419,235,hId,lxc);vgb(1021,45,tId,iRc);var P4=tMb(vLd,'OfflinePresenter',1021);vgb(1261,48,uId,oRc);var S4=tMb(vLd,'OfflineView',1261);vgb(1526,1,{},pRc);var Q4=tMb(vLd,'OfflineView_BinderImpl/Widgets',1526);var qRc;vgb(1835,1,{},sRc);_.a=false;var R4=tMb(vLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1835);vgb(944,1,RKd);_.Xb=function BWc(){KJb(this.b,_Vc(this.a.a))};QFd(op)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
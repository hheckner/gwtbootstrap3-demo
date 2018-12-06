$wnd.GwtBootstrap3Demo.runAsyncCallback40("function WRc(){}\nfunction XRc(){XRc=Qgb;URc=new WRc}\nfunction TRc(){this.a=(XRc(),URc);VRc(this.a)}\nfunction Pxc(a){oxb.call(this,a);Nxc(this)}\nfunction MRc(a,b,c){JHb();fIb.call(this,a,b,c,(iyc(),hyc))}\nfunction EWc(a){var b;if(!a.M){b=new SRc;a.M=b}return a.M}\nfunction DWc(a){var b,c;if(!a.L){c=new MRc(jHb(LIb(a.a)),(b=EWc(a),b),CWc(a));BHb((OIb(a.a),c),$Ib(OIb(a.a)));a.L=c}return a.L}\nfunction VRc(a){if(!a.a){a.a=true;Pw();Rw((_C(),'.GBG2FFLDGM{background-color:#fcf2f2;border-color:#dfb5b4;}.GBG2FFLDHM{margin-top:0 !important;}.GBG2FFLDIM{margin-left:5px;}'));return true}return false}\nfunction SRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;xIb.call(this);vIb(this,(new TRc,a=new C5b,v$b(a,(b=new d1b(iMd),v$b(b,(c=new s4b,c.a='Offline',r4b(c),c)),v$b(b,(d=new N_b,v$b(d,(e=new R1b((pec(),mec)),$jb((vrb(),e.eb),'GBG2FFLDHM',true),dyc(e.b,tSd),w$b(e,e.b,0),e)),v$b(d,new Zxc((f=new wOb,f.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Phb(f.a)).a)),v$b(d,(g=new p0c,q5b(g,(l=new wOb,l.a+=uSd,new Phb(l.a)).a),$jb(g.eb,nMd,true),g)),v$b(d,new Zxc((h=new wOb,h.a+=vSd,new Phb(h.a)).a)),v$b(d,(i=new p0c,q5b(i,(m=new wOb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Phb(m.a)).a),$jb(i.eb,nMd,true),i)),$jb(d.eb,'GBG2FFLDGM',true),d)),v$b(b,(j=new H4b,v$b(j,(n=new O4b,v$b(n,(o=new R1b(lec),dyc(o.b,'What is Offline?'),w$b(o,o.b,0),o)),n)),v$b(j,(p=new J4b,v$b(p,new Pxc((q=new wOb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Phb(q.a)).a)),p)),v$b(j,new L4b),j)),v$b(b,(k=new H4b,v$b(k,(r=new O4b,v$b(r,(s=new R1b(lec),dyc(s.b,'How to configure?'),w$b(s,s.b,0),s)),r)),v$b(k,(t=new J4b,v$b(t,new Zxc((u=new wOb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Phb(u.a)).a)),v$b(t,(v=new p0c,q5b(v,(w=new wOb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Phb(w.a)).a),$jb(v.eb,nMd,true),v)),v$b(t,new Zxc((A=new wOb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Phb(A.a)).a)),v$b(t,(B=new p0c,q5b(B,(C=new wOb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Phb(C.a)).a),$jb(B.eb,nMd,true),B)),v$b(t,new Zxc((D=new wOb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Phb(D.a)).a)),v$b(t,(F=new p0c,q5b(F,(G=new wOb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Phb(G.a)).a),$jb(F.eb,nMd,true),F)),t)),v$b(k,new L4b),k)),b)),a))}\nPgb(418,235,KId,Pxc);Pgb(1019,45,YId,MRc);var h5=WMb(_Ld,'OfflinePresenter',1019);Pgb(1259,48,ZId,SRc);var k5=WMb(_Ld,'OfflineView',1259);Pgb(1521,1,{},TRc);var i5=WMb(_Ld,'OfflineView_BinderImpl/Widgets',1521);var URc;Pgb(1833,1,{},WRc);_.a=false;var j5=WMb(_Ld,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1833);Pgb(942,1,vLd);_.Xb=function dXc(){lKb(this.b,DWc(this.a.a))};sGd(op)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")

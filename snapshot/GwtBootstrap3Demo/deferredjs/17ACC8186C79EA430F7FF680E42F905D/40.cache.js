$wnd.GwtBootstrap3Demo.runAsyncCallback40("function PRc(){}\nfunction QRc(){QRc=Bgb;NRc=new PRc}\nfunction MRc(){this.a=(QRc(),NRc);ORc(this.a)}\nfunction Ixc(a){fxb.call(this,a);Gxc(this)}\nfunction FRc(a,b,c){DHb();_Hb.call(this,a,b,c,(byc(),ayc))}\nfunction xWc(a){var b;if(!a.M){b=new LRc;a.M=b}return a.M}\nfunction wWc(a){var b,c;if(!a.L){c=new FRc(dHb(FIb(a.a)),(b=xWc(a),b),vWc(a));vHb((IIb(a.a),c),UIb(IIb(a.a)));a.L=c}return a.L}\nfunction ORc(a){if(!a.a){a.a=true;Uw();Ww((XC(),'.GBG2FFLDGM{background-color:#fcf2f2;border-color:#dfb5b4;}.GBG2FFLDHM{margin-top:0 !important;}.GBG2FFLDIM{margin-left:5px;}'));return true}return false}\nfunction LRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;rIb.call(this);pIb(this,(new MRc,a=new v5b,p$b(a,(b=new Y0b(cMd),p$b(b,(c=new l4b,c.a='Offline',k4b(c),c)),p$b(b,(d=new G_b,p$b(d,(e=new K1b((iec(),fec)),Ljb((irb(),e.eb),'GBG2FFLDHM',true),Yxc(e.b,lSd),q$b(e,e.b,0),e)),p$b(d,new Sxc((f=new qOb,f.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Ahb(f.a)).a)),p$b(d,(g=new i0c,j5b(g,(l=new qOb,l.a+=mSd,new Ahb(l.a)).a),Ljb(g.eb,hMd,true),g)),p$b(d,new Sxc((h=new qOb,h.a+=nSd,new Ahb(h.a)).a)),p$b(d,(i=new i0c,j5b(i,(m=new qOb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Ahb(m.a)).a),Ljb(i.eb,hMd,true),i)),Ljb(d.eb,'GBG2FFLDGM',true),d)),p$b(b,(j=new A4b,p$b(j,(n=new H4b,p$b(n,(o=new K1b(eec),Yxc(o.b,'What is Offline?'),q$b(o,o.b,0),o)),n)),p$b(j,(p=new C4b,p$b(p,new Ixc((q=new qOb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Ahb(q.a)).a)),p)),p$b(j,new E4b),j)),p$b(b,(k=new A4b,p$b(k,(r=new H4b,p$b(r,(s=new K1b(eec),Yxc(s.b,'How to configure?'),q$b(s,s.b,0),s)),r)),p$b(k,(t=new C4b,p$b(t,new Sxc((u=new qOb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Ahb(u.a)).a)),p$b(t,(v=new i0c,j5b(v,(w=new qOb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Ahb(w.a)).a),Ljb(v.eb,hMd,true),v)),p$b(t,new Sxc((A=new qOb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Ahb(A.a)).a)),p$b(t,(B=new i0c,j5b(B,(C=new qOb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Ahb(C.a)).a),Ljb(B.eb,hMd,true),B)),p$b(t,new Sxc((D=new qOb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Ahb(D.a)).a)),p$b(t,(F=new i0c,j5b(F,(G=new qOb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Ahb(G.a)).a),Ljb(F.eb,hMd,true),F)),t)),p$b(k,new E4b),k)),b)),a))}\nAgb(418,235,FId,Ixc);Agb(1020,45,SId,FRc);var U4=QMb(VLd,'OfflinePresenter',1020);Agb(1260,48,TId,LRc);var X4=QMb(VLd,'OfflineView',1260);Agb(1522,1,{},MRc);var V4=QMb(VLd,'OfflineView_BinderImpl/Widgets',1522);var NRc;Agb(1832,1,{},PRc);_.a=false;var W4=QMb(VLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1832);Agb(943,1,pLd);_.Xb=function YWc(){fKb(this.b,wWc(this.a.a))};lGd(op)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")

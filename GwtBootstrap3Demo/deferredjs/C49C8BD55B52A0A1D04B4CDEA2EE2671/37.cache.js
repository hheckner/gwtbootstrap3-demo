function foc(){}
function Wnc(a,b,c){$lb.call(this,a,b,c,(e0b(),d0b))}
function ooc(a){var b;if(!a.g){b=new doc(new foc);a.g=b}return a.g}
function noc(a){var b;if(!a.f){b=new Wnc(hlb(Fmb(a.a)),ooc(a),moc(a));zlb((Gmb(a.a),b),Rmb(Gmb(a.a)));a.f=b}return a.f}
function doc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L;smb(this,(a=new lHb,fAb(a,(b=new UCb(wFc),fAb(b,(c=new gGb,c.a='Project Setup',fGb(c),c.b='basic setup and using custom themes',fGb(c),c)),fAb(b,(d=new oGb,fAb(d,(i=new AGb,zGb(i,(j=new RDb(3),j.b=xFc,PDb(j),j)),i)),fAb(d,(k=new rGb,fAb(k,new EEb((n=new Rsb,oo(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new g_(n.a.a)).a)),fAb(k,(o=new Ztc,cHb(o,(p=new Rsb,oo(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new g_(p.a.a)).a),J1((T9(),o.cb),AFc,true),o)),k)),d)),fAb(b,(e=new oGb,fAb(e,(q=new AGb,zGb(q,(r=new RDb(3),r.b='Bootstrap2 Look-a-like Setup',PDb(r),r)),q)),fAb(e,(s=new rGb,fAb(s,new EEb((t=new Rsb,oo(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new g_(t.a.a)).a)),fAb(s,(u=new Ztc,cHb(u,(v=new Rsb,oo(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new g_(v.a.a)).a),J1(u.cb,AFc,true),u)),s)),e)),fAb(b,(f=new oGb,fAb(f,(w=new AGb,zGb(w,(A=new RDb(3),A.b='Custom Theme',PDb(A),A)),w)),fAb(f,(B=new rGb,fAb(B,new EEb((C=new Rsb,oo(C.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new g_(C.a.a)).a)),fAb(B,(D=new Ztc,cHb(D,(F=new Rsb,oo(F.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new g_(F.a.a)).a),J1(D.cb,AFc,true),D)),B)),f)),fAb(b,(g=new oGb,fAb(g,(G=new AGb,zGb(G,(H=new RDb(3),H.b='Support for IE8',PDb(H),H)),G)),fAb(g,(I=new rGb,fAb(I,new EEb((J=new Rsb,oo(J.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new g_(J.a.a)).a)),fAb(I,(K=new Ztc,cHb(K,(L=new Rsb,oo(L.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new g_(L.a.a)).a),J1(K.cb,AFc,true),K)),I)),g)),b)),a))}
YZ(1313,535,Qzc,Wnc);YZ(1316,540,Rzc,doc);YZ(1317,1,{},foc);YZ(1324,1,qAc);_.Ab=function Eoc(){iob(this.b,noc(this.a.a))};var qV=crb(SEc,'SetupPresenter',1313),sV=crb(SEc,'SetupView',1316),rV=crb(SEc,'SetupView_BinderImpl',1317);xAc(Lm)(37);
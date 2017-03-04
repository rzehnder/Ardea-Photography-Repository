// Created by iWeb 3.0.4 local-build-20120513

function createMediaStream_id4()
{return IWCreatePhotocast("http://ardeaphotography.com/Ardea_Photography/Favorites_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://ardeaphotography.com/Ardea_Photography',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://ardeaphotography.com/Ardea_Photography',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(164,164),new IWSize(164,37),new IWSize(196,216),27,27,0,new IWSize(24,25)),new IWPhotoFrame([IWCreateImage('Favorites_files/techblack-frame_01.png'),IWCreateImage('Favorites_files/techblack-frame_02.png'),IWCreateImage('Favorites_files/techblack-frame_03.png'),IWCreateImage('Favorites_files/techblack-frame_06.png'),IWCreateImage('Favorites_files/techblack-frame_09.png'),IWCreateImage('Favorites_files/techblack-frame_08.png'),IWCreateImage('Favorites_files/techblack-frame_07.png'),IWCreateImage('Favorites_files/techblack-frame_04.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,122),url:'Favorites_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Favorites_files/stroke_1.png'},{rect:new IWRect(2,-2,696,4),url:'Favorites_files/stroke_2.png'},{rect:new IWRect(698,-2,4,4),url:'Favorites_files/stroke_3.png'},{rect:new IWRect(698,2,4,122),url:'Favorites_files/stroke_4.png'},{rect:new IWRect(698,124,4,4),url:'Favorites_files/stroke_5.png'},{rect:new IWRect(2,124,696,4),url:'Favorites_files/stroke_6.png'},{rect:new IWRect(-2,124,4,4),url:'Favorites_files/stroke_7.png'}],new IWSize(700,126))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Favorites_files/FavoritesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');detectBrowser();fixupIECSS3Opacity('id2');fixAllIEPNGs('Media/transparent.gif');IMpreload('Favorites_files','shapeimage_3','0');IMpreload('Favorites_files','shapeimage_3','1');IMpreload('Favorites_files','shapeimage_3','2');IMpreload('Favorites_files','shapeimage_3','3');IMpreload('Favorites_files','shapeimage_3','4');IMpreload('Favorites_files','shapeimage_3','5');Widget.onload();applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}

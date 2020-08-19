{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\fswiss\fcharset0 Arial-BoldMT;\f2\fmodern\fcharset0 CourierNewPSMT;
\f3\fmodern\fcharset0 CourierNewPS-BoldMT;}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;\red242\green242\blue242;\red23\green23\blue23;
\red26\green125\blue169;\red252\green252\blue252;\red0\green0\blue0;\red77\green80\blue81;\red41\green142\blue11;
}
{\*\expandedcolortbl;;\cssrgb\c20000\c20000\c20000;\cssrgb\c96078\c96078\c96078;\cssrgb\c11765\c11765\c11765;
\cssrgb\c9804\c56471\c72157;\cssrgb\c99216\c99216\c99216;\cssrgb\c0\c0\c0;\cssrgb\c37255\c38824\c39216;\cssrgb\c18431\c61176\c3922;
}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}}
\margl1440\margr1440\vieww20880\viewh11660\viewkind0
\deftab720
\pard\pardeftab720\sl520\sa120\partightenfactor0

\f0\fs40 \cf2 \cb3 \expnd0\expndtw0\kerning0
ES6:\

\fs36 Let, const, var\
Arrow functions\
this keyword\
template literals\
Default values, object literals\
Rest & spread operators\
Destructing assignment
\fs40 \
\
Decorators\
\pard\pardeftab720\sl360\sa400\partightenfactor0

\fs32 \cf4 Decorators are often used in JavaScript to extend the behaviour of a class, property, getter, setter, or method.\
Examples of Lightning Web Component decorators include:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl360\partightenfactor0
\ls1\ilvl0
\f1\b \cf4 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
@api
\f0\b0 : Marks a property as public for use in your template or other components.\cb1 \
\ls1\ilvl0
\f1\b \cb3 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
@track
\f0\b0 : Marks a property for internal monitoring. A template or function using this property forces a component to rerender when the property\'92s value changes. Use this to store values locally, especially as a user interacts with your component.\cb1 \
\ls1\ilvl0
\f1\b \cb3 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
@wire
\f0\b0 : Gives you a way to get and bind data. This implementation simplifies getting data from a Salesforce org.\cb1 \
\pard\pardeftab720\sl360\sa400\partightenfactor0
\cf4 \cb3 You can import multiple decorators. Like:\
\pard\pardeftab720\sl360\sa400\partightenfactor0

\f2\fs21\fsmilli10800 \cf5 \cb6 import\cf7  \cf8 \{\cf7  \cf5 LightningElement\cf8 ,\cf7  track\cf8 ,\cf7  api \cf8 \}\cf7  from 
\f3\b \cf9 'lwc'
\f2\b0 \cf8 ;\cf7 \
}
from bs4 import BeautifulSoup
from flask import Flask, render_template

month_str=''
month_num = 1
def setmonthstr(num):
  if (num==1):
    return 'Jan'
  elif (num==2):
    return 'Feb'
  elif (num==3):
    return 'Mar'
  elif (num==4):
    return 'Apr'
  elif (num==5):
    return 'May'
  elif (num==6):
    return 'Jun'
  elif (num==7):
    return 'July'
  elif (num==8):
    return 'Aug'
  elif (num==9):
    return 'Sep'
  elif (num==10):
    return 'Oct'
  elif (num==11):
    return 'Nov'
  elif (num==12):
    return 'Dec'
  else:
    return

totalcount = 0

for i in range(12):
  month_num = i +1
  month_str = setmonthstr(month_num)
  soup = BeautifulSoup(open("monthdata/"+month_str+".html", encoding="utf-8"), "html.parser")
  bodytext = bodytext = soup.find('div', class_='bodytext')
  totalcount = totalcount + len(bodytext.text)

print(totalcount)


import random
from time import sleep
list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
kartyak = []
kartyak.append(random.choice(list1))
kartyak.append(random.choice(list1))
ertek = sum(kartyak)
osztolapok = []
osztoertek = sum(osztolapok)
osztolapok.append(random.choice(list1))
print("Hatalmas Black Jack játék gameszkó")
print("Kezdő lapjaid:",*kartyak, "összegük:", ertek)
print("Osztó kártyája:", *osztolapok)
bulin = True
osztas = True
while bulin:
    asd = True
    while asd:
        lehetoseg = input("Tartasz vagy ütsz?   (tart,üt):")
        if lehetoseg.lower() == "üt":
            kartyak.append(random.choice(list1))
            ertek = sum(kartyak)
            print("A lapjaid:",*kartyak, "összegük:", ertek)
        if ertek > 21:
            osztas = False
            asd = False
            print("Vesztettél")
            break
    if lehetoseg.lower() == "tart":
        osztas = True
        osztolapok.append(random.choice(list1))
        while osztas:
            while osztoertek < ertek:
                osztoertek = sum(osztolapok)
                print("Az osztó húzott. A lapjai:",*osztolapok,"értéke:",osztoertek)
                sleep(1)
                if osztoertek < ertek:
                    osztolapok.append(random.choice(list1))
                if osztoertek >= ertek and ertek < 22 and osztoertek > 22:
                    osztas = False
                    print("Nyertél")
                if osztoertek < 22 and ertek < 22 and osztoertek >= ertek:
                    print("Vesztettél")
                    osztas = False
        ujras = True
        while ujras:
            ujra = input("Szeretnél újra játszani?  (i/n):")
            if ujra.lower() == "n":
                bulin = False
                ujras = False
            elif ujra.lower() == "i":
                osztolapok = []
                kartyak = []
                kartyak.append(random.choice(list1))
                kartyak.append(random.choice(list1))
                osztolapok.append(random.choice(list1))
                ertek = sum(kartyak)
                osztoertek = sum(osztolapok)
                print("----------------------------------------------------")
                print("Kezdő lapjaid:",*kartyak, "összegük:", ertek)
                print("Osztó kártyája:", *osztolapok)
                ujras = False 
                continue  
            

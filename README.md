# Avtori

Avtori არის **ტატუსალონის ვებსაიტი**, რომელიც საშუალებას გაძლევს:  
- დარეგისტრირდე ან გაიარო ავტორიზაცია  
- გაეცნო სალონის შესახებ ზოგად ინფორმაციას  
- დაათვალიერო პროდუქტები/სერვისები  
- დაამატო კალათაში და გაიარო Checkout პროცესი  

---

## გამოყენებული ტექნოლოგიები

- [React 19](https://react.dev/) – UI კომპონენტების ასაწყობად  
- [Vite](https://vitejs.dev/) – სწრაფი Development & Build Tool  
- [React Router DOM](https://reactrouter.com/) – Routing სისტემისთვის  
- [React Hook Form](https://react-hook-form.com/) – ფორმების მართვისთვის  
- [Zod](https://zod.dev/) – სქემებზე დაფუძნებული ვალიდაციისთვის  
- CSS – სტილიზაციისთვის  

---

## ინსტალაცია

პროექტის გასაშვებად:

```bash
# დაკლონე რეპოზიტორია
git clone https://github.com/KetiKatamadze/Avtori.git

# შედი საქაღალდეში
cd Avtori

# დააყენე dependencies
npm install

# გაუშვი development სერვერი
npm run dev
```

შემდეგ გახსენი [http://localhost:5173] ბრაუზერში.  


---

## ფუნქციონალი

### Authentication
- Login / Register ფორმები  
- Email + Password ვალიდაცია  
- Register ფორმა "Confirm Password"-ით  
- შეცდომების ჩვენება (`zod` + `react-hook-form` გამოყენებით)  
- Google Login (Demo)  

### Routing / Navigation
- მთავარი გვერდი (Hero)  
- About – ინფორმაცია სალონის შესახებ  
- Contact – საკონტაქტო მონაცემები  
- FAQ – ხშირად დასმული კითხვები  
- Terms – წესები და პირობები  
- Products – სერვისების / პროდუქტების სია  
- Cart – კალათის გვერდი  
- Checkout – შეკვეთის ფორმა  

### Cart & Checkout
- პროდუქტის/სერვისის კალათაში დამატება  
- კალათის შიგთავსის დინამიკური ჩვენება  
- Checkout გვერდი (Demo flow – რეალური გადახდა ჯერ არაა)  

### UI
- სტილები დაწერილია ჩვეულებრივი CSS-ით  
- რესფონსიული (responsive) დიზაინი  
- წარმატებული/შეცდომის შეტყობინებები ფორმებში  

---

## მომავალი გეგმები
- Backend ინტეგრაცია  
- გადახდის სისტემების დამატება  
- სრულად Mobile Friendly დიზაინი  
- მომხმარებლის პროფილი  
- გალერეა ტატუ-ნამუშევრებისთვის

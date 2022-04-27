
const users = [

"Johnatan_Alzate_Ospina",

"Omar_Pallero",

"Rodrigo_Rojas",

"agustin_castanol",

"alvarez_matias",

"camila_coelho",

"claudio_mandujano",

"german_niebuhr",

"guadalupe_migoya",

"horacio_yeuchuk",

"ignacio_martinez",

"javier_romero",

"jhoan_carrero",

"jhonny_berdeja",

"julia_ribotto",

"luciano_michalik",

"martin_pereyra",

"nicolas_barboza",

"pablo_flores_",

"pablo_rex",

"ricardo_huamani",

"valentina_brocanelli_novillo",

];

db.auth('root', 'root');
users.map(user => {
    
    db = db.getSiblingDB(user);
    db.createUser(
        {
            user: user,
            pwd:  user,
            roles: [ { role: "readWrite", db: user } ]
        }
    )
    db.createCollection('welcome');

    db.welcome.insertOne(
        {
        message: "Welcome to your database " + user.split("_").join(" ")
        }
    );
}); 
    
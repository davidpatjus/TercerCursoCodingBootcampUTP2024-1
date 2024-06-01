CREATE DATABASE TiendaOnline;

USE TiendaOnline;

CREATE TABLE clientes (
    ClientID int NOT NULL primary key AUTO_INCREMENT,
    Nombre varchar(50),
    Apellido varchar(50),
    Direccion varchar(50),
    Telefono varchar(15),
    Email varchar(50)
    );

CREATE TABLE provedores (
    ProveedorID int NOT NULL primary key AUTO_INCREMENT,
    NombreEmpresa varchar(50),
    NIT varchar(50),
    Telefono varchar(15)
    );

CREATE TABLE productos (
    ProductID int NOT NULL primary key AUTO_INCREMENT,
    NombreProducto varchar(50),
    Precio int,
    Stock int,
    ProveedorID int,
    FOREIGN KEY (ProveedorID) REFERENCES provedores(ProveedorID)
    );

CREATE TABLE ventas (
    VentaID int NOT NULL primary key AUTO_INCREMENT,
    FechaVenta date,
    Cantidad int,
    TotalVenta decimal(10,2),
    ClientID int,
    FOREIGN KEY (ClientID) REFERENCES clientes(ClientID),
    ProductID int,
    FOREIGN KEY (ProductID) REFERENCES productos(ProductID)
    );

INSERT INTO clientes(Nombre,Apellido,Direccion,Telefono,Email)
    VALUES 
    ("Juan","Perez","Calle 1 # 1-1","321654987","juanperez@gmail.com"),
    ("Maria","Gomez","Calle 2 # 2-2","321654987","mariagomez@gmail.com"),
    ("Pedro","Lopez","Calle 3 # 3-3","321654987","pedrolopez@gmail.com"),
    ("Jose","Rojas","Calle 4 # 4-4","321654987","joserojas@gmail.com"),
    ("Luis","Gonzalez","Calle 5 # 5-5","321654987","luisgonzalez@gmail.com"),
    ("Carlos","Hernandez","Calle 6 # 6-6","321654987","carlosHernandez@gmail.com"),
    ("Sandra","Garcia","Calle 7 # 7-7","321654987","sandragarcia@gmail.com"),
    ("Ricardo","Gutierrez","Calle 8 # 8-8","321654987","ricardogutierrez@gmail"),
    ("Ana","Rodriguez","Calle 9 # 9-9","321654987","anarodriguez@gmail.com"),
    ("Luis","Gonzalez","Calle 10 # 10-10","321654987","luisgonzalez@gmail.com");

INSERT INTO provedores(NombreEmpresa,NIT,Telefono)
    VALUES 
    ("Apple","123456789","3146268248"),
    ("Samsung","987654321","3146268248"),
    ("Xiaomi","123456789","3146268248"),
    ("Huawei","987654321","3146268248"),
    ("Google","123456789","3146268248"),
    ("Microsoft","987654321","3146268248"),
    ("Amazon","123456789","3146268248"),
    ("Dell","987654321","3146268248"),
    ("Lenovo","123456789","3146268248"),
    ("HP","987654321","3146268248");

INSERT INTO productos(NombreProducto,Precio,Stock,ProveedorID)
    VALUES 
    ("computador",50000,500,10),
    ("celular",30000,300,9),
    ("tablet",20000,200,8),
    ("smartwatch",10000,100,7),
    ("television",40000,400,6),
    ("reproductor",20000,200,5),
    ("auriculares",10000,100,4),
    ("mouse",5000,50,3),
    ("teclado",5000,50,2),
    ("monitor",20000,200,1);

INSERT INTO ventas(FechaVenta,Cantidad,TotalVenta,ClientID,ProductID)
    VALUES
    ("2022-01-01",1,50000,1,1),
    ("2022-01-02",2,60000,2,2),
    ("2022-01-03",3,70000,3,3),
    ("2022-01-04",4,80000,4,4),
    ("2022-01-05",5,90000,5,5),
    ("2022-01-06",6,100000,6,6),
    ("2022-01-07",7,110000,7,7),
    ("2022-01-08",8,120000,8,8),
    ("2022-01-09",9,130000,9,9),
    ("2022-01-10",10,140000,10,10);
    
SELECT * FROM clientes;
SELECT * FROM provedores;
SELECT * FROM productos;
SELECT * FROM ventas;

 
SELECT v.VentaID, v.FechaVenta, c.Nombre AS cliente, p.NombreProducto AS producto, v.TotalVenta 
  FROM ventas v 
    INNER JOIN clientes c ON v.ClientID = c.ClientID 
    INNER JOIN productos p ON v.ProductID = p.ProductID;

SELECT V.VentaID, V.FechaVenta, C.Nombre AS cliente,  
  FROM ventas V
    INNER JOIN clientes C ON V.ClientID = C.ClientID
    INNER JOIN productos P ON V.ProductID = P.ProductID;




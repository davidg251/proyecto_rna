#PROYECTO FINAL REDES NEURONALES

#Descripcion
en esta pequeño proyecto se busca hacer uso
de la red neuronal backpropagation para el reconocimiento
de numeros desde el 0 hasta el 9, ademas de simbolos como +,-,*,/
 , para ello se ha modelado una red de 3 capas de entrada ,
oculta y de salida, las cuales tienen 144, 50 y 4
neuronas respectivamente.

Bascicamente la aplicacion consiste de un
"backend" y un "frontend" , el backend esta hecho en python
hace uso de la libreria FANN escrita en C/C++ [1], para ello se hace
uso de un "language binding"[2] de la libreria en python, este modulo de la
aplicacion esta encargado de entrenar y de probar la red con un
nuevo patron a clasificar, en el proceso de entrenamiento se hace mediante un
archivo de texto donde esta cada uno de los patrones a aprender y su salida
deseada archivo *.data, y retorna el objeto red en un archivo de texto *.net
cuando la aplicacion esta en ejecucion lee la red desde el archivo y la prueba con
un nuevo patron a clasificar.

el frontend de la aplicacion esta hecho en html, javascript(usando jquery) y es
un objeto canvas en el cual puedo dibujar un numero , y enviarlo a la red para que
lo clasifique , antes que esto pase se hace una normalizacion de los datos que consiste
en pixelar(reducir) la imagen resultante y extraer de ahi el patron poniendo 1 donde sea
negro y -1 donde no lo sea.

#Instalacion

para poder correr la aplicacion debemos tener FANN que se descarga desde 
http://sourceforge.net/projects/fann/files/fann/2.2.0/FANN-2.2.0-Source.zip/download
lo descargamos, descomprimimos , vamos al directorio e instalamos la libreria mediante

'''cmake -D CMAKE_INSTALL_PREFIX:PATH=/usr .'''
 
 despues de esto se crea un ambiente virtual python y se instala el binding language para python 
 de la libreria con

 '''pip install fann2'''

 luego de esto ya tenemos los paquetes necesarios para correr la aplicacion , vamos al directorio
 raiz y con el comando 
 '''python server.py'''
la aplicacion estara corriendo localmente en el puerto 8080



#Referencias
[1] http://leenissen.dk/fann/wp/
[2] https://github.com/FutureLinkCorporation/fann2

import ejemplo
import time
import BaseHTTPServer
import json
import red


HOST_NAME = '127.168.0.1'
PORT_NUMBER = 8080

class MyHandler(BaseHTTPServer.BaseHTTPRequestHandler):

    def end_headers(self):
        self.send_my_headers()

        BaseHTTPServer.BaseHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        self.send_header("Access-Control-Allow-Origin", "http://127.168.0.1:8000")



    def do_HEAD(s):
        s.send_response(200)
        s.send_header("Content-type", "text/html")
        s.send_header("Access-Control-Allow-Origin","*")

        s.end_headers()

    def do_GET(s):
        s.send_response(200)
        s.send_header("Content-type", "application/json")
        s.send_header("Access-Control-Allow-Origin","*")

        s.end_headers()

    def do_POST(s):
        s.data_string = s.rfile.read(int(s.headers['Content-Length']))
        s.send_header("Content-type", "text/html")
        s.send_header("Access-Control-Allow-Origin","*")

        s.send_response(200)
        s.end_headers()

        #red.entrenar()
        patron_html = s.data_string
        patron_prueba = json.loads(patron_html)
        red.probar(patron_prueba)
        print 'ajjueee'
        s.wfile.write('arrreee')
        return 'joooooda'

        #print(s.data_string) #comodiceunamigomiodebug











if __name__ == '__main__':
    server_class = BaseHTTPServer.HTTPServer
    httpd = server_class((HOST_NAME, PORT_NUMBER), MyHandler)
    print time.asctime(), "Servidor Inicio - %s:%s" % (HOST_NAME, PORT_NUMBER)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
        httpd.server_close()
    print time.asctime(), "Servidor se detuvo - %s:%s" % (HOST_NAME, PORT_NUMBER)

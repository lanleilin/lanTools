    
            function generate(num) {
                this.w = num;
                var that = this;
                this.qrcode = new QRCode(document.getElementById("qrcode"), {
                    width: that.w, //设置宽高
                    height: that.w
                });
                this.url = document.getElementById("getValue").value ? document.getElementById("getValue").value : "say hello";
                this.qrcode.makeCode(this.url);
            }

            function foo() {
                this.getWidth = document.getElementById('getWidth').value.slice(0, 3);
                this.w = parseInt(this.getWidth) ? parseInt(this.getWidth) : 240;
                new generate(this.w);
                let _this = this;
                document.getElementById("send").addEventListener('click', function() {
                    document.getElementById('qrcode').innerHTML = '';
                    _this.getWidth = document.getElementById('getWidth').value.slice(0, 3);
                    _this.w = parseInt(_this.getWidth) ? parseInt(_this.getWidth) : 240;
                    new generate(_this.w);
                })
                document.getElementById('clear').addEventListener('click', function() {
                    document.getElementById('getValue').value = '';
                })
            }
            new foo();

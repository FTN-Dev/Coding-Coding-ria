function Angkot(Sopir, Trayek, Penumpang, Kas) {
    this.Sopir = Sopir;
    this.Trayek = Trayek;
    this.Penumpang = Penumpang;
    this.Kas = Kas;

    this.penumpangNaik = function( namaPenumpang ) {
        this.Penumpang.push(namaPenumpang);
        return this.Penumpang;
    }

    this.penumpangTurun = function( namaPenumpang, bayar ) {
        if( this.Penumpang.length === 0 ) {
            alert('Angkot Masih Kosong!');
            return false;
        }    

        for( var i = 0; i < this.Penumpang.length; i++ ) {
            if( this.Penumpang[i] == namaPenumpang ) {
                this.Penumpang[i] = undefined;
                this.Kas += bayar;
                return this.Penumpang;
            }
        }
    }

}

var angkot1 = new Angkot('Abah Jongli', ['Nagoya','Tokyo'], [], 0);
const original = document.querySelector(".produto");
const produtos = document.querySelector(".produtos");
const divCarrinho = document.querySelector(".carrinho");
const numeroWhatsApp = "5516996364132";

produtos.innerHTML = "";
for (const p of lsProduto) {
    const clone = original.cloneNode(true);
    clone.querySelector(".nome").innerText = p.nome;
    clone.querySelector(".descricao").innerText = p.descricao;
    clone.querySelector("img").src = p.img;
    clone.querySelector("img").alt = p.nome;
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2).toString().replace(".", ",")}`;
    produtos.appendChild(clone);
}

document.querySelectorAll(".produto").forEach((p, i) => {
    p.addEventListener("click", () => {
        p.classList.toggle("marcado");
        if (lsProduto[i].qt == undefined) {
            lsProduto[i].qt = 1;
        } else {
            delete lsProduto[i].qt;
        }
        atualizarQt();
    });
});

function atualizarQt() {
    const qt = lsProduto.filter(p => p.qt >= 1);
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : "";
}

document.querySelector("#btProd").addEventListener("click", carrinho);

function carrinho() {
    const qt = document.querySelector("#qt").innerText;
    if (qt == "") {
        alert("Necessário selecionar ao menos 1 item.");
        return;
    }
    produtos.classList.toggle("ocultar");
    divCarrinho.classList.toggle("ocultar");
    atualizarTb();
}

let pedido;
function atualizarTb() {
    pedido = "";
    let total = 0;
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < lsProduto.length; i++) {
        const p = lsProduto[i];
        if (p.qt > 0) {
            let parcial = p.qt * p.valor;
            tbody.innerHTML += `<tr>
                <td>${p.nome}</td>
                <td>${p.qt}</td>
                <td>${p.valor.toFixed(2).replace(".", ",")}</td>
                <td>${parcial.toFixed(2).replace(".", ",")}</td>
                <td class="acao" onclick="add(${i}, 1)">+</td>
                <td class="acao" onclick="add(${i},-1)">-</td>
            </tr>
            `;
            total += parcial;
            pedido += `${p.nome} (${p.qt}x R$ ${p.valor.toFixed(2).replace(".", ",")}) = R$ ${parcial.toFixed(2).replace(".", ",")}\n`;
        }
    }

    tbody.innerHTML += `
    <tr class="total-row">
        <td colspan="3">Valor Final</td>
        <td colspan="3">R$ ${total.toFixed(2).replace(".", ",")}</td>
    </tr>
    `;
    pedido += `Total = R$ ${total.toFixed(2).replace(".", ",")}\n`;
}

function add(i, valor) {
    lsProduto[i].qt += valor;

    if (lsProduto[i].qt == 0) {
        document.querySelectorAll(".produto")[i].dispatchEvent(new Event("click"));
    }

    atualizarTb();

    const qtItens = lsProduto.filter(p => p.qt >= 1);
    if (qtItens.length == 0) {
        produtos.classList.remove("ocultar");
        divCarrinho.classList.add("ocultar");
        atualizarQt();
    }
}

const frm = document.querySelector("form");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;

    let msg = `Olá! Vim pelo site Ž A B A e gostaria de fazer o seguinte pedido:\n\n`;
    msg += pedido;
    msg += `\nAtt: ${nome}`;

    if (confirm("Deseja enviar este pedido para o WhatsApp?\n\n" + msg)) {
        msg = encodeURIComponent(msg);
        const link = `https://wa.me/${numeroWhatsApp}?text=${msg}`;
        window.open(link, '_blank');
    }
});
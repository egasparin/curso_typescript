// cria a classe de observadores
class Observable {
  // cria uma lista vazia para armazenar os observadores
  constructor() {
    this.observers = [];
  }
  // define uma função para adicionar elementos observadores
  subscribe(f) {
    this.observers.push(f);
  }
  // define uma função para remover elementos observadores
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }
  // define uma função para notificar os observadores em caso de mudança;
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const subscribeP1 = document.querySelector('.js-subscribe-p1');
const unsubscribeP1 = document.querySelector('.js-unsubscribe-p1');
const updateP1 = text => p1.textContent = text;

const headingsObserver = new Observable();
headingsObserver.subscribe(updateP1);

subscribeP1.addEventListener('click', () => headingsObserver.subscribe(updateP1));
unsubscribeP1.addEventListener('click', () => headingsObserver.unsubscribe(updateP1));
input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});
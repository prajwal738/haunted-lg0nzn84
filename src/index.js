import { html } from "lit-html";
import { component, useState } from "haunted";

function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <style>
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    </style>
    <button @click=${() => setCount(count - 1)}>
      -
    </button>
    <span>${count}</span>
    <button @click=${() => setCount(count + 1)}>
      +
    </button>
  `;
}

customElements.define("my-counter", component(Counter));

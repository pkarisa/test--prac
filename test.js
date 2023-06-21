import cx from "classnames";




import { Component } from "react";




export default class TodoList extends Component {

     changeclass(e) {

        if (document.getElementById(e).classList.contains('is-done')) {

          document.getElementById(e).classList.remove('is-done');

        } else {

          document.getElementById(e).classList.add('is-done');

        }

      }




     add() {

        var ul = document.getElementById('tasks');

        var li = document.createElement('li');

      

        var nextid = document.querySelectorAll('ul li').length + 1;

      

        if (document.getElementById('item').value.length > 0) {

          li.appendChild(

            document.createTextNode(document.getElementById('item').value)

          );

          li.setAttribute('id', nextid);

          li.setAttribute('onclick', 'changeclass(' + nextid + ')');

          ul.appendChild(li);

        }

      }




  render() {

    return (

      <>

        <div>

          <h2>My List</h2>

          <input type="text" id="item" name="item" />

           

          <button onClick={this.add}>Add</button>

          <ul id="tasks"></ul>

        </div>




        <style>{`

                    .is-done {

                        text-decoration: line-through;

                    }

                `}</style>

      </>

    );

  }

}
  
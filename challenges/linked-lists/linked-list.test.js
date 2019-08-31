'use strict';

const LinkedList = require('./linked-list');


describe('making a linked list', () => {
    describe('Instantiate', () => {
        test('instantiate an empty linked list', () => {
            const linkedList = new LinkedList();
            expect(linkedList.head).toEqual(null);
        });
    });

    describe('Insert', () => {
        test('Can insert into a linked list', () => {
            const linkedList = new LinkedList();    
            linkedList.insert(1);
            expect(linkedList.head.value).toEqual(1);
            expect(linkedList.head.next). toEqual(null);     
        });

        test('Point head to the first node in the linked list', () => {
            const linkedList = new LinkedList();
            linkedList.insert(1);
            linkedList.insert(2)
            expect(linkedList.head.value).toEqual(2);
            expect(linkedList.head.next.value).toEqual(1);
        });

        // test('Can insert multiple nodes into a linked list', () => {
        //     const linkedList = new LinkedList();
        //     linkedList.insert('a');
        //     linkedList.insert('b');
        //     linkedList.insert('c');
        //     expect(linkedList.head.value).toEqual('c');
        //     expect(linkedList.head.next.value).toEqual('b');
        //     expect(linkedList.head.next.next.value).toEqual('a');
        //     expect(linkedList.head.next.next.next).toEqual(null);
        // })
    })
});
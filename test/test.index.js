/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var array = require('../src/index.js');

describe('index.js', function () {
    it('.like/.from', function () {
        var obj1 = {
            0: '',
            1: '',
            length: 2
        };
        expect(array.like([])).toEqual(true);
        expect(array.from([])).toEqual([]);
        expect(array.like(obj1)).toEqual(true);
        expect(array.from(obj1)).toEqual(['', '']);
        (function () {
            expect(array.like(arguments)).toEqual(true);
            expect(array.from(arguments)).toEqual([]);
        }());
        expect(array.like(window)).toEqual(true);
        expect(array.like(function () {
        })).toEqual(true);
        expect(array.like()).toEqual(false);
        expect(array.from()).toEqual([]);
    });

    it('.each', function () {
        var arr1 = ['a', 'b', 'c'];
        var ret1 = 0;
        var ret2 = '';

        array.each(arr1, function (index, item) {
            if (index === 2) {
                return false;
            }

            ret1 += index;
            ret2 += item;
        });

        expect(ret1).toEqual(1);
        expect(ret2).toEqual('ab');
        expect(function () {
            array.each(true, function () {
                //
            });
        }).toThrowError(/NOT/);
    });

    it('.map', function () {
        var arr1 = [1, 2, 3];
        var arr2 = array.map(arr1, function (item) {
            return item * item;
        });

        expect(arr1).toEqual([1, 2, 3]);
        expect(arr1).toBe(arr1);
        expect(arr2).toEqual([1, 4, 9]);
        expect(arr2).not.toBe(arr1);
    });

    it('.filter', function () {
        var arr1 = [1, 2, 3];
        var arr2 = array.filter(arr1, function (item) {
            return item > 1;
        });

        expect(arr1).toEqual([1, 2, 3]);
        expect(arr1).toBe(arr1);
        expect(arr2).toEqual([2, 3]);
        expect(arr2).not.toBe(arr1);
    });
    it('.remove',function(){
        var arr1 = [1, 2, 3, 4];
        var indexes = [0,1,2];
        var arr2 = array.remove(arr1,indexes);
        expect(arr2).toEqual([4]);
    });
});

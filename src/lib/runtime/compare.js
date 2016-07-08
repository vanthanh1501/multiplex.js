import valueOf from '../utils/value-of';

/**
* Performs a comparison of two objects of the same type and returns a value indicating whether one object is less than, equal to, or greater than the other.
* @param {Object} objA The first object to compare.
* @param {Object} objB The second object to compare.
* @returns {Number}
*/
export default function compare(objA, objB) {
    // Identical objects
    if (objA === objB) {
        return 0;
    }

    // null or undefined is less than everything
    else if (objA == null) {
        return objB == null ? 0 : -1;
    }

    // Everything is greater than null or undefined
    else if (objB == null) {
        return objA == null ? 0 : 1;
    }

    // numbers compare using 'gt' operator
    else if (typeof objA === 'number') {
        if (isNaN(objA)) {
            return isNaN(objB) ? 0 : -1;
        }
        else if (isNaN(objB)) {
            return 1;
        }
        return objA > objB ? 1 : -1;
    }

    // booleans compare using 'gt' operator
    else if (typeof objA === 'boolean') {
        return objA > objB ? 1 : -1;
    }

    // Strings are compared using String.prototype.localeCompare method
    else if (typeof objA === 'string') {
        var _res = objA.localeCompare(objB);
        return _res > 0 ? 1 : (_res < 0 ? -1 : 0);
    }

    // Compute overriden 'compare' method for Object types
    else if (typeof objA.__cmp__ === 'function') {
        return objA.__cmp__(objB);
    }

    // All other objects are compared using 'valudOf' method
    else {
        var _v1 = valueOf(objA),
            _v2 = valueOf(objB);

        return _v1 > _v2 ? 1 : (_v1 < _v2 ? -1 : 0);
    }
}

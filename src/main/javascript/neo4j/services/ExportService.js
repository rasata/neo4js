/*
 * Copyright (c) 2010-2013 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @class Interface to the export functionality of the REST server.
 * @extends neo4j.Service
 * @param db
 *            should be a neo4j.GraphDatabase object
 */
neo4j.services.ExportService = function(db) {

	neo4j.Service.call(this,db);

};

_.extend(neo4j.services.ExportService.prototype, neo4j.Service.prototype);

/**
 * Export all nodes, properties and relationships.
 * 
 * @param callback
 *            will be called with an object with a single property, "url", the
 *            value of which is a URL where you can download the export.
 * @function
 */
neo4j.services.ExportService.prototype.all = neo4j.Service
    .resourceFactory({
        'resource' : 'export_all',
        'method' : 'POST'
    }
);
